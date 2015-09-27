import express from 'express';
import fs from 'fs';
import path from 'path';

export default function getRoutes(tablesPath, collection) {
  const router = express.Router(); // eslint-disable-line new-cap
  const fileName = path.join(tablesPath, collection.name, 'config.json');
  const fileReadOptions = {
    enc: 'utf8'
  };
  const config = fs.readFileSync(fileName, fileReadOptions);
  const configObj = JSON.parse(config);

  router.get('/api/v1/' + collection.name, (req, res, next) => {
    collection.find({}).then((rows) => {
      res.send({
        rows, colNames: configObj.colNames
      });
    }).catch((err) => {
      next(err);
    });
  });

  router.post('/api/v1/' + collection.name, (req, res, next) => {
    collection.save(req.body).then(() => {
      res.end();
    }).catch((err) => {
      next(err);
    });
  });

  router.delete('/api/v1/' + collection.name + '/:id', (req, res, next) => {
    collection.remove(req.params.id).then(() => {
      res.end();
    }).catch((err) => {
      next(err);
    });
  });
  return router;
}
