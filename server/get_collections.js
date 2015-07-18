import path from 'path';
import fs from 'fs';

import Collection from './collection';

export default function getCollections() {
  let dataPath = path.join(__dirname, '../data');

  let dirs = fs.readdirSync(dataPath);

  console.log(dirs);

  let collections = [];

  dirs.forEach(function(dir) {
    var collection = new Collection(dataPath, dir);
    collections.push(collection);
  });
  return collections;
}