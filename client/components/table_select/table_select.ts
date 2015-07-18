/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {Router} from 'angular2/router';


@Component({
  selector: 'table-select'
})
@View({
  templateUrl: './components/table_select/table_select.html'
})
export default class TableSelect {
  constructor(private router: Router) {
    this.router = router;
  }
  navigate (whichTable) {
    this.router.navigate('/table/' + whichTable);
  }
}
