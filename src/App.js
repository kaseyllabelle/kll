import React, {Fragment} from 'react';
import {Route} from 'react-router';

import Header from './components/header';
import Footer from './components/footer';
import ProjectPage from './containers/project-page/project-page';
import Info from './containers/info/info';
import Home from './containers/home/home';

const App = () => (
  <Fragment>
    <Route path="/" component={Header} />
    <Route exact path="/" component={Home} />
    <Route path="/info" component={Info} />
    <Route path="/project/:name" component={ProjectPage} />
    <Route path="/" component={Footer} />
  </Fragment>
)

export default App;