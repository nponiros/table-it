import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import util from 'util';

import getCollections from './get_collections';
import getRoutes from './get_routes';

const PORT = 3000;

/*server.configure(function() {
  server.set('port', PORT);
  server.set('views', __dirname + '/views');
  server.set('view engine', 'jade');
  server.use(express.favicon(__dirname + '/public/images/favicon.ico'));
  server.use(express.json());
  app.set('x-powered-by', false);
});*/

export default function init() {
  let app = express();
  app.set('x-powered-by', false);
  app.set('query parser', 'simple');
  app.use(bodyParser.json());

  app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
  app.use(express.static(path.join(__dirname, '../client')));

  let collections = getCollections();
  let collectionNames = [];
  collections.forEach(function(collection) {
    collectionNames.push(collection.name);
    app.use('/', getRoutes(collection));
  });

  app.get('/api/v1/tables', function(req, res) {
    res.send(collectionNames);
  });

  // Error handler
  app.use(function(err, req, res, next) {
    send.error(res, err.status, err);
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.listen(PORT, function() {
    util.log('Express server listening on port ' + PORT);
  });
};
