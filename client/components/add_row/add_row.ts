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
class AddRow {
  add = new EventEmitter();
  private colNames: Array<string>;
  private row;
  constructor() {
    this.row = {};
  }

  onSubmit() {
    const dataToSend = {
      elems: []
    };
    dataToSend.elems = this.colNames.map((colName) => {
      return this.row[colName];
    });
    this.add.next(dataToSend);
  }
}

export default AddRow;
