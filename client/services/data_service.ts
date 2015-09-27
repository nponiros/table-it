/// <reference path="../../typings/tsd.d.ts" />

import {Http, Headers} from 'angular2/http';
import {Inject} from 'angular2/angular2';

class DataService {
  private http: Http;
  constructor(@Inject(Http) http: Http) {
    this.http = http;
  }
  getData (tableName) {
    const url = `/api/v1/${tableName}`;
    return this.http.request(url).toRx().map(res => res.json());
  }
  sendNewData(tableName, data) {
    const url = `/api/v1/${tableName}`;
    const headerOptions = {
      'Content-Type': 'application/json'
    };
    const requestOptions = {
      headers: new Headers(headerOptions)
    };
    return this.http.post(url, JSON.stringify(data), requestOptions).toRx();
  }
  removeData(tableName, id) {
    let url = `/api/v1/${tableName}/${id}`;
    return this.http.delete(url).toRx();
  }
}

export default DataService;
