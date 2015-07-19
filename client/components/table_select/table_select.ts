/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';

// TODO: examples say to use 'angular2/http' but module http is not declared in the typings
import {Http} from 'angular2/angular2';

import {Router} from 'angular2/router';

@Component({
  selector: 'table-select'
})
@View({
  templateUrl: './components/table_select/table_select.html',
  directives: [NgFor]
})
export default class TableSelect {
  private tables: Array<string>;
  private router: Router;
  private http: Http;
  constructor(router: Router, http: Http) {
    this.router = router;
    this.tables = [];
    http.get('/api/v1/tables').toRx().map(res => res.json()).subscribe(tables => this.tables = tables)
  }
  navigate (whichTable) {
    this.router.navigate('/table/' + whichTable);
  }
}
