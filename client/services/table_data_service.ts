/// <reference path="../../typings/tsd.d.ts" />

// TODO: examples say to use 'angular2/di' but module di is not declared in the typings
import {Injectable} from 'angular2/angular2';

import DataService from './data_service';

@Injectable()
export default class TableDataService {
  private tableData;
  private dataService: DataService;

  constructor(dataService: DataService) {
    this.tableData = {
      colNames: [],
      rows: []
    };
    this.dataService = dataService;
  }

  getAll(tableName) {
    this.dataService.getData(tableName).subscribe((table) => {
      this.tableData.colNames = table.colNames;
      this.tableData.rows = table.rows
    });
    return this.tableData;
  }

  addNew(tableName, row) {
    this.dataService.sendNewData(tableName, row).subscribe(() => {
      this.tableData.rows.push(row);
    });
  }
}