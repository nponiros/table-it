/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../interfaces/ITableData.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

@Component({
  selector: 'table-wrapper',
  properties: ['tableData: table-data'],
  events: ['remove']
})
@View({
  templateUrl: './components/table/table.html',
  directives: [NgFor]
})
export default class Table {
  remove = new EventEmitter();
  private tableData: ITableData;
  removeRow(rowId) {
    this.remove.next(rowId);
  }
}
