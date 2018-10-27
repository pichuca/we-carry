import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';

// Sections
import Inventory from './components/sections/inventory/Inventory';
import Orders from './components/sections/orders/Orders';
import Entries from './components/sections/entries/Entries';
import Stats from './components/sections/stats/Stats';
// import Configuration from './components/sections/configuration/Configuration';

// Single pages
import Product from './components/single-pages/product/Product';
import Tracking from './components/single-pages/tracking/Tracking';
import SingleEntry from './components/single-pages/entry/Entry';

// import logo from './logo.svg';
import './App.css';
import './components/sections/Sections.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    // Fake loading time to N seconds.
    let fakeLoadingTime = 2500;
    setTimeout(() => this.setState({ isLoading: false, }, () => {
      console.log('Finished loading!');
    }), fakeLoadingTime);
  }
  render() {
    const { isLoading } = this.state;
    if(isLoading) { // if your component doesn't have to wait for async data, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="sections">
            {/* Routes. */}
            <Route exact path="/" component={Inventory} />
            <Route exact path="/inventory" component={Inventory} />
            <Route path="/orders" component={Orders} />
            <Route path="/entries" component={Entries} />
            <Route path="/stats" component={Stats} />
            {/* <Route path="/configuration" component={Configuration} /> */}
            <Route path="/product/:sku/:name/:availability" component={Product} />
            <Route path="/tracking/:sku" component={Tracking} />
            <Route path="/entry" component={SingleEntry} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
