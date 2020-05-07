import {SearchActions, SearchActionTypes} from '../actions/search.actions'

export interface SearchState {
    items:any[],
    isloading:Boolean

}

export const initialState: SearchState = {
    items:[],
    isloading:false
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
          isloading:action.isloading
        };

        case SearchActionTypes.LoadSearch:
        return {
          ...state,
          isloading:action.isloading
        };
      
      default:
        return state;
    }
  }