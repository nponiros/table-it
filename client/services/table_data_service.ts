/// <reference path="../../typings/tsd.d.ts" />

import {Inject} from 'angular2/angular2';
import DataService from './data_service';

class TableDataService {
  private tableData;
  private dataService: DataService;

  constructor(@Inject(DataService) dataService: DataService) {
    this.tableData = {
      colNames: [],
      rows: []
    };
    this.dataService = dataService;
  }

  getAll(tableName) {
    this.dataService.getData(tableName).subscribe((table) => {
      this.tableData.colNames = table.colNames;
      this.tableData.rows = table.rows;
    });
    return this.tableData;
  }

  addNew(tableName, row) {
    this.dataService.sendNewData(tableName, row).subscribe(() => {
      this.tableData.rows.push(row);
    });
  }

  removeRow(tableName, rowId) {
    this.dataService.removeData(tableName, rowId).subscribe(() => {
      const index = this.tableData.rows.findIndex((row) => {
        return row._id === rowId;
      });
      this.tableData.rows.splice(index, 1);
    });
  }
}

export default TableDataService;
