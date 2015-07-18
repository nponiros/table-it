import express from 'express';
import fs from 'fs';
import path from 'path';

export default function getRoutes(collection) {
  let router = express.Router();
  let dataPath = path.join(__dirname, '../data');
  let config = fs.readFileSync(dataPath + '/' + collection.name + '/config.json', {enc: 'utf8'});
  let configObj = JSON.parse(config);
  router.get('/api/v1/' + collection.name, function(req, res) {
    console.log('get cables');
    collection.find({}).then(function(rows){
      res.send({rows: rows, colNames: configObj.colNames});
    }).catch(function(err) {
      res.send(err);
    });
  });
  return router;
}