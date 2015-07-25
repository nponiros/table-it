/// <reference path="../typings/tsd.d.ts" />

import {bootstrap, bind} from 'angular2/angular2';

// TODO: examples say to use 'angular2/http' but module http is not declared in the typings
import {httpInjectables} from 'angular2/angular2';

import {routerInjectables} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import DataService from './services/data_service';
import TableItApp from './components/table_it_app/table_it_app';

bootstrap(TableItApp, [httpInjectables, routerInjectables, DataService, bind(LocationStrategy).toClass(HashLocationStrategy)]);
