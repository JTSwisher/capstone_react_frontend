import React from 'react';
import './App.css';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './History';

import LandingContainer from './containers/LandingContainer';
import AuthenticationContainer from './containers/AuthenticationContainer';
import HomeContainer from './containers/HomeContainer';
//import { isLoggedIn } from './components/isLoggedIn'

function App() {

  function isLoggedIn() {
    return ( localStorage.token ? true : false )
  }

  return (
    <Router history={history}>
    
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/login" component={AuthenticationContainer} />
        <Route exact path="/home" component={HomeContainer}>
          {isLoggedIn() ? history.push("/home") : history.push("/") }
        </Route> 
      
    </Router>
  );
}

export default App;

