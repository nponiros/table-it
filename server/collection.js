let NeDBDataStore = require('nedb');

export default class Collection {
  constructor(dataPath, collectionName) {
    // TODO: path.join
    var filename = dataPath + '/' + collectionName + '/data.db';
    var options = {
      filename: filename,
      autoload: true
    };
    this.datastore = new NeDBDataStore(options);
    this.name = collectionName;
    this.save({elems: ['cat6', 'blue']});
    this.save({elems: ['cat6', 'red']});
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
    console.log('find');
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
