import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import util from 'util';

import getCollections from './get_collections';
import getRoutes from './get_routes';

export default function init(port, tablesPath) {
  const app = express();
  app.set('x-powered-by', false);
  app.set('query parser', 'simple');
  app.use(bodyParser.json());

  app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
  app.use('/libs', express.static(path.join(__dirname, '../libs')));
  app.use(express.static(path.join(__dirname, '../client')));

  const collections = getCollections(tablesPath);
  const collectionNames = [];
  collections.forEach(function(collection) {
    collectionNames.push(collection.name);
    app.use('/', getRoutes(tablesPath, collection));
  });

  app.get('/api/v1/tables', function(req, res) {
    res.send(collectionNames);
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // Error handler
  app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
    res.send(err);
  });

  app.listen(port, function() {
    util.log(`Express server listening on port ${port}`);
  });
}
