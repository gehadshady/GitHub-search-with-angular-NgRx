import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  LoadSearch = '[Search] Load Searchs',
  LoadSearchSuccess = '[Search] Load Searchs Success',
  LoadSearchFailure = '[Search] Load Searchs Failure',
}

export class LoadSearch implements Action {
  readonly type = SearchActionTypes.LoadSearch;
  constructor(public searcValue:string, public isloading:Boolean ) { }
}
export class LoadSearchSuccess implements Action {
  readonly type = SearchActionTypes.LoadSearchSuccess;
  constructor(public data:any,public isloading:Boolean ) { }
}

export class LoadSearchFailure implements Action {
  readonly type = SearchActionTypes.LoadSearchFailure;
  constructor(public error: any,public isloading:Boolean ) { }
}

export type SearchActions = LoadSearch | LoadSearchSuccess | LoadSearchFailure;

