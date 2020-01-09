import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import NavBar from './components/layout/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import Topic from './components/Topic';
import Accordian from './components/Accordian';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/topic' component={Topic} />
        <Route exact path='/accordian' component={Accordian} />
      </Switch>
    </Router>
  );
};

export default App;
