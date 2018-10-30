import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import UserModule from './user-module/UserModule';
import logo from '../../assets/svg/we_carry.svg';
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
    return (
    <React.Fragment>
        <header className="App-header">
          <MediaQuery query="(min-width: 1016px)">
            <div className="links">
                <Link id="home" to="/inventory">
                  <img src={logo} className="app-logo" alt="logo" />
                </Link>
                <Link id="inventory" className={this.browserUrlIncludes('/inventory') ? 'selected' : ''} to="/inventory">Inventario</Link>
                <Link id="orders" className={this.browserUrlIncludes('/orders') ? 'selected' : ''} to="/orders">Pedidos</Link>
                <Link id="entries" className={this.browserUrlIncludes('/entries') ? 'selected' : ''} to="/entries">Solicitudes</Link>
                <Link id="stats" className={this.browserUrlIncludes('/stats') ? 'selected' : ''} to="/stats">Estadísticas</Link>
                {/* <Link id="configuration" className={this.browserUrlIncludes('/configuration') ? 'selected' : ''} to="/configuration">Configuración</Link> */}
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1015px)">
            <Link id="home" to="/inventory">
              <img src={logo} className="app-logo" alt="logo" />
            </Link>
          </MediaQuery>
          <UserModule userName={'Santiago Fernandez (Momio)'} />
        </header>
    </React.Fragment>
    );
  }
}

export default Header;
