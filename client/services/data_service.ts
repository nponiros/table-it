/// <reference path="../../typings/tsd.d.ts" />

// TODO: examples say to use 'angular2/http' but module http is not declared in the typings
import {Http} from 'angular2/angular2';

// TODO: examples say to use 'angular2/di' but module di is not declared in the typings
import {Inject} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

export default class DataService {
  private http: Http;
  constructor(@Inject(Http) http: Http) { // TODO: just using typescript type definition does not seem to be enough to properly inject a service into an other service
    this.http = http;
  }
  // TODO this gets called twice, needs optimizing
  getData (tableName) {
    let url = '/api/v1/' + tableName;
    return this.http.request(url).toRx().map(res => res.json());
  }
}