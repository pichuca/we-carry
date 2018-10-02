import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Header.css';

class Header extends Component {
  render() {
    return (
    <React.Fragment>
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <nav>
            <div className="links">
                <Link to="/inventory">Inventario</Link>
                <Link to="/orders">Pedidos</Link>
                <Link to="/entries">Solicitudes</Link>
                <Link to="/stats">Estadísticas</Link>
                <Link to="/configuration">Configuración</Link>
            </div>
            </nav>
        </header>
    </React.Fragment>
    );
  }
}

export default Header;
