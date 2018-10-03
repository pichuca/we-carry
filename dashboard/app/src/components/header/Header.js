import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLink: null,
    };
  }
  handleLinkClick(event) {
    console.log(event.currentTarget.id);
    let clickedId = event.currentTarget.id;
    this.setState({
      selectedLink: clickedId,
    });
  }
  render() {
    const selectedLink = this.state.selectedLink;
    return (
    <React.Fragment>
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <nav>
            <div className="links">
                <Link id="inventory" className={selectedLink === this.id ? 'selected' : ''} to="/inventory" onClick={this.handleLinkClick.bind(this)}>Inventario</Link>
                <Link id="orders" className={selectedLink === this.id ? 'selected' : ''} to="/orders" onClick={this.handleLinkClick.bind(this)}>Pedidos</Link>
                <Link id="entries" className={selectedLink === this.id ? 'selected' : ''} to="/entries" onClick={this.handleLinkClick.bind(this)}>Solicitudes</Link>
                <Link id="stats" className={selectedLink === this.id ? 'selected' : ''} to="/stats" onClick={this.handleLinkClick.bind(this)}>Estadísticas</Link>
                <Link id="configuration" className={selectedLink === this.id ? 'selected' : ''} to="/configuration" onClick={this.handleLinkClick.bind(this)}>Configuración</Link>
            </div>
            </nav>
        </header>
    </React.Fragment>
    );
  }
}

export default Header;
