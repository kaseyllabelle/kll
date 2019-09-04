import * as appConstants from './constants';
import { initialAppContext } from './initializers';

export const appReducer = (state = initialAppContext, action) => {

  const currentState = {...state};

  switch(action.type) {
    case appConstants.CURRENT_PAGE: 
    //
  }
  return currentState;

}