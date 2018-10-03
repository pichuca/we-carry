import React, { Component } from 'react';
import { Link, location } from "react-router-dom";

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.browserUrlIncludes = this.browserUrlIncludes.bind(this);
  }
  browserUrlIncludes(match) {
    return window.location.pathname.includes(match);
  }
  render() {
    const selectedLink = this.state.selectedLink;
    return (
    <React.Fragment>
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <nav>
            <div className="links">
                <Link id="inventory" className={this.browserUrlIncludes('/inventory') ? 'selected' : ''} to="/inventory">Inventario</Link>
                <Link id="orders" className={this.browserUrlIncludes('/orders') ? 'selected' : ''} to="/orders">Pedidos</Link>
                <Link id="entries" className={this.browserUrlIncludes('/entries') ? 'selected' : ''} to="/entries">Solicitudes</Link>
                <Link id="stats" className={this.browserUrlIncludes('/stats') ? 'selected' : ''} to="/stats">Estadísticas</Link>
                <Link id="configuration" className={this.browserUrlIncludes('/configuration') ? 'selected' : ''} to="/configuration">Configuración</Link>
            </div>
            </nav>
        </header>
    </React.Fragment>
    );
  }
}

export default Header;
