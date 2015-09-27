import NeDBDataStore from 'nedb';
import path from 'path';

export default class Collection {
  constructor(tablesPath, collectionName) {
    const filename = path.join(tablesPath, collectionName, 'data.db');
    const options = {
      filename,
      autoload: true
    };
    this.datastore = new NeDBDataStore(options);
    this.name = collectionName;
  }
  save(data) {
    const promise = new Promise((resolve, reject) => {
      this.datastore.insert(data, (err) => {
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
    const promise = new Promise((resolve, reject) => {
      this.datastore.find(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  }
  remove(id) {
    const query = {
      _id: id
    };
    const promise = new Promise((resolve, reject) => {
      this.datastore.remove(query, (err, result) => {
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
