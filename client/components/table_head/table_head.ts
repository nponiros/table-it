/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import DataService from '../../services/data_service';

// Annotation section
@Component({
  selector: 'thead'
})
@View({
  templateUrl: './components/table_head/table_head.html',
  directives: [NgFor]
})
// Component controller
export default class TableHead {
  private colNames: Array<string>;
  constructor(dataService: DataService, routeParams: RouteParams) {
    this.colNames = [];
    dataService.getData(routeParams.get('tbl')).subscribe(cables => this.colNames = cables.colNames);
  }
}
