import React, { useReducer, useEffect } from 'react';
import { Route } from 'react-router';

import { appReducer } from './context/reducer';
import { initialAppContext } from './context/initializers';
import { CURRENT_PAGE } from './context/constants'

import Header from './components/header';
import Footer from './components/footer';
import ProjectPage from './containers/project-page/project-page';
import Info from './containers/info/info';
import Home from './containers/home/home';

export const appContext = React.createContext(initialAppContext);

const App = () => {
  const [ appStore, appStoreDispatch ] = useReducer(appReducer, initialAppContext);

  useEffect(() => {
    appStoreDispatch({ type: CURRENT_PAGE, payload: window.location.href });
  }, []);

  return (
    <appContext.Provider value={{ appStore, appStoreDispatch }}>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/info" component={Info}/>
      <Route path="/project/:name" component={ProjectPage}/>
      <Footer/>
    </appContext.Provider>
  )
}

export default App;