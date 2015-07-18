/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

import DataService from '../../services/data_service';

// Annotation section
@Component({
  selector: 'tbody'
})
@View({
  templateUrl: './components/table_body/table_body.html',
  directives: [NgFor]
})
// Component controller
export default class TableBody {
  private rows: Array<Object>;
  constructor(dataService: DataService) {
    this.rows = [];
    dataService.getData().subscribe(cables => this.rows = cables.rows);
  }
}