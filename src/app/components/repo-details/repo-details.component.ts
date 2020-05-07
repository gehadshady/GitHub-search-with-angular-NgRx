import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../reducers';
import {selectItems} from '../../reducers'




@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  items:any[];
  item:any;
  constructor( private route: ActivatedRoute,private store: Store<searchReducers.State>) {
    this.store
    .pipe(select(selectItems))
    .subscribe(items => {
      this.items = items;
    })
   }

  ngOnInit() {
    this.item=this.items.filter(item =>
      item.id==this.route.snapshot.params.id
    )[0];
  

  }

}
