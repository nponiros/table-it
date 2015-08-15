/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../interfaces/ITableData.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

@Component({
  selector: 'table-wrapper',
  properties: ['tableData: table-data']
})
@View({
  templateUrl: './components/table/table.html',
  directives: [NgFor]
})
export default class Table {
  private tableData: ITableData;
}
