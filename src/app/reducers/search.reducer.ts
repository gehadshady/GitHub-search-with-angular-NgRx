import {SearchActions, SearchActionTypes} from '../actions/search.actions'

export interface SearchState {
    items:any[],
    isloading:Boolean,
    error:string


}

export const initialState: SearchState = {
    items:[],
    isloading:false,
    error:''
}

export function searchReducer(
    state = initialState,
    action: SearchActions
  ): SearchState {
    switch (action.type) {
      case SearchActionTypes.LoadSearchSuccess:
        return {
          ...state,
          items:action.data,
          isloading:action.isloading,
          error:''

        };

        case SearchActionTypes.LoadSearch:
        return {
          ...state,
          isloading:action.isloading
        };

        case SearchActionTypes.LoadSearchFailure:
        return {
          ...state,
          isloading:action.isloading,
          error:action.error
        };

      default:
        return state;
    }
  }