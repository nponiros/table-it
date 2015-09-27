/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {RouteConfig, RouterOutlet} from 'angular2/router';

import TableSelect from '../table_select/table_select';
import ActiveTable from '../active_table/active_table';

@RouteConfig([
  {path: '/', component: TableSelect},
  {path: '/table/:tbl', component: ActiveTable, as: 'table'}
])
@Component({
  selector: 'table-it-app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
class TableItApp {}

export default TableItApp;
