/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap, bind} from 'angular2/angular2';
// TODO: examples say to use 'angular2/http' but module http is not declared in the typings
import {httpInjectables} from 'angular2/angular2';

import {routerInjectables, RouteConfig, RouterOutlet} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy, HTML5LocationStrategy} from 'angular2/router';

import DataService from './services/data_service';

import TableSelect from './components/table_select/table_select';
import Table from './components/table/table';

@RouteConfig([
  {path: '/', component: TableSelect},
  {path: '/table/:tbl', component: Table, as: 'table'}
])
@Component({
  selector: 'table-it-app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet, Table]
})
class TableItApp {
  constructor() {}
}

bootstrap(TableItApp, [httpInjectables, routerInjectables, DataService, bind(LocationStrategy).toClass(HashLocationStrategy)]);
