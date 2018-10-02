import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';

// Sections
import Inventory from './components/sections/inventory/Inventory';
import Orders from './components/sections/orders/Orders';
import Entries from './components/sections/entries/Entries';
import Stats from './components/sections/stats/Stats';
import Configuration from './components/sections/configuration/Configuration';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="sections">
            {/* Sections. */}
            <Route exact path="/inventory" component={Inventory} />
            <Route path="/orders" component={Orders} />
            <Route path="/entries" component={Entries} />
            <Route path="/stats" component={Stats} />
            <Route path="/configuration" component={Configuration} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
