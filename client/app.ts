/// <reference path="../typings/tsd.d.ts" />

import {bootstrap, bind} from 'angular2/angular2';

import {HTTP_BINDINGS} from 'angular2/http';

import {ROUTER_BINDINGS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import DataService from './services/data_service';
import TableDataService from './services/table_data_service';
import TableItApp from './components/table_it_app/table_it_app';

bootstrap(TableItApp, [HTTP_BINDINGS, ROUTER_BINDINGS, DataService, bind(LocationStrategy).toClass(HashLocationStrategy), TableDataService]);
