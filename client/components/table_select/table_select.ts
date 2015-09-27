/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';

import {Router} from 'angular2/router';

import DataService from '../../services/data_service';

@Component({
  selector: 'table-select'
})
@View({
  templateUrl: './components/table_select/table_select.html',
  directives: [NgFor]
})
class TableSelect {
  private tables: Array<string>;
  private router: Router;
  constructor(router: Router, dataService: DataService) {
    this.router = router;
    this.tables = [];
    dataService.getData('tables').subscribe((tables) => {
      this.tables = tables;
    });
  }
  navigate (whichTable) {
    this.router.navigate(`/table/${whichTable}`);
  }
}

export default TableSelect;
