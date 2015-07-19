/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import DataService from '../../services/data_service';

@Component({
  selector: 'tbody'
})
@View({
  templateUrl: './components/table_body/table_body.html',
  directives: [NgFor]
})
export default class TableBody {
  private rows: Array<Object>;
  constructor(dataService: DataService, routeParams: RouteParams) {
    this.rows = [];
    dataService.getData(routeParams.get('tbl')).subscribe(cables => this.rows = cables.rows);
  }
}