import path from 'path';
import fs from 'fs';

import Collection from './collection';

export default function getCollections(tablesPath) {
  let dirs = fs.readdirSync(tablesPath);

  let collections = [];

  dirs.forEach(function(dir) {
    var collection = new Collection(tablesPath, dir);
    collections.push(collection);
  });

  return collections;
}