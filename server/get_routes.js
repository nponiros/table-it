import express from 'express';
import fs from 'fs';
import path from 'path';

export default function getRoutes(tablesPath, collection) {
  let router = express.Router();
  const fileName = path.join(tablesPath, collection.name, 'config.json');
  const fileReadOptions = {
    enc: 'utf8'
  };
  let config = fs.readFileSync(fileName, fileReadOptions);
  let configObj = JSON.parse(config);

  router.get('/api/v1/' + collection.name, function(req, res, next) {
    collection.find({}).then(function(rows){
      res.send({rows: rows, colNames: configObj.colNames});
    }).catch(function(err) {
      next(err);
    });
  });

  router.post('/api/v1/' + collection.name, function(req, res, next) {
    collection.save(req.body).then(function() {
      res.end();
    }).catch(function(err) {
      next(err);
    });
  });

  router.delete('/api/v1/' + collection.name + '/:id', function(req, res, next) {
    collection.remove(req.params.id).then(() => {
      res.end();
    }).catch((err) => {
      next(err);
    });
  });
  return router;
}