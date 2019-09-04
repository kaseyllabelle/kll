import * as appConstants from './constants';
import { initialAppContext } from './initializers';

export const appReducer = (state = initialAppContext, action) => {
  switch(action.type) {
    case appConstants.CURRENT_PAGE:
      const currentPage = action.payload.split('/').pop() === 'info' ? 'info' : 'projects';
      return { ...state, currentPage }

    case appConstants.CURRENT_FILTER:
      return { ...state, currentFilter: action.payload }

    default: return state
  }
}