/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import Table from '../table/table';
import AddRow from '../add_row/add_row';

import TableDataService from '../../services/table_data_service';

// TODO: Careful it seems that you have to use $event to get data with custom events
@Component({
  selector: 'active-table'
})
@View({
  template: `
  <add-row [col-names]="tableData.colNames" (add)="addRow($event)"></add-row>
  <table-wrapper [table-data]="tableData" (remove)="removeRow($event)"></table-wrapper>`,
  directives: [AddRow, Table]
})
export default class ActiveTable {
  private tableData: ITableData;
  private tableName: string;
  private tableDataService: TableDataService;
  constructor(tableDataService: TableDataService, routeParams: RouteParams) {
    this.tableDataService = tableDataService;
    this.tableName = routeParams.get('tbl');
    this.tableData = tableDataService.getAll(this.tableName);
  }
  addRow(row) {
    this.tableDataService.addNew(this.tableName, row);
  }
  removeRow(rowId) {
    this.tableDataService.removeRow(this.tableName, rowId);
  }
}
