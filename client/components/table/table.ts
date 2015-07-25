/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import TableBody from 'components/table_body/table_body';
import TableHead from 'components/table_head/table_head';
import AddRow from 'components/add_row/add_row';

import DataService from '../../services/data_service';

@Component({
  selector: 'table-wrapper'
})
@View({
  template: `<add-row></add-row><table class="table"><thead></thead><tbody></tbody></table>`,
  directives: [TableHead, TableBody, AddRow]
})
export default class Table {
  constructor() {}
}
