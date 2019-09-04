import * as appConstants from './constants';
import { initialAppContext } from './initializers';

export const appReducer = (state = initialAppContext, action) => {
  switch(action.type) {
    case appConstants.CURRENT_PAGE:
    return { ...state, currentPage: action.payload }
    default: return state;
  }
}