import * as appConstants from './constants';
import { initialAppContext } from './initializers';

export const appReducer = (state = initialAppContext, action) => {
  switch(action.type) {
    case appConstants.CURRENT_PAGE:

    const currentPage = action.payload.split('/').pop() === 'info' ? 'Info' : 'Projects';

    console.log(currentPage);

    return { ...state, currentPage }

    default: return state;
  }
}