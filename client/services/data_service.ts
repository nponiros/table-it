/// <reference path="../../typings/tsd.d.ts" />

import {Http, Request, Headers} from 'angular2/http';
import {Inject} from 'angular2/angular2';

export default class DataService {
  private http: Http;
  constructor(@Inject(Http) http: Http) {
    this.http = http;
  }
  getData (tableName) {
    let url = '/api/v1/' + tableName;
    return this.http.request(url).toRx().map(res => res.json());
  }
  sendNewData(tableName, data) {
    let url = '/api/v1/' + tableName;
    let headerOptions = {
      'Content-Type': 'application/json'
    };
    let requestOptions = {
      headers: new Headers(headerOptions)
    };
    return this.http.post(url, JSON.stringify(data), requestOptions).toRx();
  }
}