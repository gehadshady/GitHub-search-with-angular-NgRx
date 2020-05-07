import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../reducers';
import {selectItems} from '../../reducers'

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  items:any[];
  constructor(private store: Store<searchReducers.State>) {

      this.store
      .pipe(select(selectItems))
      .subscribe(items => {
        this.items = items;
     })

  }

  ngOnInit() {
  }

}
