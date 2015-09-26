/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor, EventEmitter, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'add-row',
  events: ['add'],
  properties: ['colNames: col-names']
})
@View({
  templateUrl: './components/add_row/add_row.html',
  directives: [FORM_DIRECTIVES, NgFor]
})
export default class AddRow {
  private colNames: Array<string>;
  private row;
  add = new EventEmitter();
  constructor() {
    this.row = {};
  }

  onSubmit() {
    let dataToSend = {elems: []};
    this.colNames.forEach(function (colName) {
      dataToSend.elems.push(this.row[colName]);
    }, this);
    this.add.next(dataToSend);
  }
}