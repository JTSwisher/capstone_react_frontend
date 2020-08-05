import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthenticationContainer from './containers/AuthenticationContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={AuthenticationContainer} />
      </div>
    </Router>
  );
}

export default App;
