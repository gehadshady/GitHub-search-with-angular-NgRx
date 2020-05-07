import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../reducers';
import {selectIsloading , selectError} from '../../reducers'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading:Boolean;
  error:string;

  constructor(private store: Store<searchReducers.State>) { 

    this.store
    .pipe(select(selectIsloading))
    .subscribe(isLoading => {
      this.isLoading = isLoading;
    });

    this.store
    .pipe(select(selectError))
    .subscribe(error => {
      this.error = error;
    });
  }

  ngOnInit() {
  }

}
