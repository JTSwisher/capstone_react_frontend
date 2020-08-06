import React from 'react';
import './App.css';
import {Router, Route } from 'react-router-dom';
import history from './History';

import AuthenticationContainer from './containers/AuthenticationContainer';
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path="/" component={AuthenticationContainer} />
        <Route exact path="/home" component={HomeContainer} />
      </div>
    </Router>
  );
}

export default App;
