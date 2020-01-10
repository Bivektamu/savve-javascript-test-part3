import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import NavBar from './components/layout/NavBar';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Topic from './components/pages/Topic';
import Accordian from './components/pages/Accordian';
import Default from './components/pages/Default';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/topic' component={Topic} />
        <Route exact path='/accordian' component={Accordian} />
        <Route exact component={Default} />
      </Switch>
    </Router>
  );
};

export default App;
