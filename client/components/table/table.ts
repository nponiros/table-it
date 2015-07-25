/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../interfaces/ITableData.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import DataService from '../../services/data_service';

@Component({
  selector: 'table-wrapper'
})
@View({
  templateUrl: './components/table/table.html',
  directives: [NgFor]
})
export default class Table {
  private tableData: ITableData;
  constructor(dataService: DataService, routeParams: RouteParams) {
    this.tableData = {
      colNames: [],
      rows: []
    };
    dataService.getData(routeParams.get('tbl')).subscribe(table => this.tableData = table);
  }
}
