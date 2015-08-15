/// <reference path="../../typings/tsd.d.ts" />

// TODO: examples say to use 'angular2/http' but module http is not declared in the typings
import {Http, Request, Headers} from 'angular2/angular2';

// TODO: examples say to use 'angular2/di' but module di is not declared in the typings
import {Injectable} from 'angular2/angular2';

@Injectable()
export default class DataService {
  private http: Http;
  constructor(http: Http) {
    this.http = http;
  }
  // TODO this gets called twice, needs optimizing
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