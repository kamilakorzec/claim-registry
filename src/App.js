import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Dashboard from './Dashboard/Dashboard';
import ClaimForm from './Form/Form'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navigation />
        </div>
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/form'} component={ClaimForm} />
      </div>
    );
  }
}

export default App;
