import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './History';

import LandingContainer from './containers/LandingContainer';
import AuthenticationContainer from './containers/AuthenticationContainer';
import HomeContainer from './containers/HomeContainer';


function App() {

  function isLoggedIn() { //checks logged in status of user, used to prevent access to home page without beign logged in.
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

