import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthenticationPage from './components/authentication/AuthenticationPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={AuthenticationPage} />
      </div>
    </Router>
  );
}

export default App;
