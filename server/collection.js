import NeDBDataStore from 'nedb';
import path from 'path';

export default class Collection {
  constructor(tablesPath, collectionName) {
    var filename = path.join(tablesPath, collectionName, 'data.db');
    var options = {
      filename: filename,
      autoload: true
    };
    this.datastore = new NeDBDataStore(options);
    this.name = collectionName;
  }
  save(data) {
    var promise = new Promise((resolve, reject) => {
      this.datastore.insert(data, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    return promise;
  }
  find(query) {
    var promise = new Promise((resolve, reject) => {
      this.datastore.find(query, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  }
}
