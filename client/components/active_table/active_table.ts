/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

import Table from '../table/table';
import AddRow from '../add_row/add_row';

@Component({
  selector: 'active-table'
})
@View({
  template: `<add-row></add-row><table-wrapper></table-wrapper>`,
  directives: [AddRow, Table]
})
export default class ActiveTable {}
