/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {FormBuilder, formInjectables, formDirectives, ControlGroup} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import DataService from '../../services/data_service';

class Model {
  constructor(fieldNames) {
    fieldNames.forEach(function(fieldName) {
      this[fieldName] = '';
    }, this);
  }
}
@Component({
  selector: 'add-row'
})
@View({
  templateUrl: './components/add_row/add_row.html',
  directives: [formDirectives, NgFor]
})
export default class AddRow {
  private model: Model;
  private colNames: Array<string>;
  private dataService: DataService;
  private routeParams: RouteParams;
  constructor(dataService: DataService, routeParams: RouteParams) {
    this.colNames = [];
    this.dataService = dataService;
    this.routeParams = routeParams;
    dataService.getData(routeParams.get('tbl')).subscribe(cables => {this.colNames = cables.colNames; this.model = new Model(this.colNames);});
  }
  onSubmit() {
    console.log(this.model);
    let dataToSend = {elems: []};
    this.colNames.forEach(function(colName) {
      dataToSend.elems.push(this.model[colName]);
    }, this);
    this.dataService.sendNewData(this.routeParams.get('tbl'), dataToSend);
  }
}