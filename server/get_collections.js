import fs from 'fs';

import Collection from './collection';

export default function getCollections(tablesPath) {
  const dirs = fs.readdirSync(tablesPath);

  const collections = dirs.map((dir) => {
    const collection = new Collection(tablesPath, dir);
    return collection;
  });

  return collections;
}
