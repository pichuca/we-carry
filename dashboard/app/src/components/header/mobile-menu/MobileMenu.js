import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SubMenu from '../user-module/sub-menu/SubMenu';

import './MobileMenu.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

const subMenuMobileConfig = {
  label: 'Menú',
  links: [
    {
      label: 'Inventario',
      url: '/inventory',
      id: 'inventory',
    },
    {
      label: 'Pedidos',
      url: '/orders',
      id: 'orders',
    },
    {
      label: 'Solicitudes',
      url: '/entries',
      id: 'entries',
    },
    {
      label: 'Estadísticas',
      url: '/stats',
      id: 'stats',
    },
  ],
};

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenuList: false,
    };
  }
  openMobileMenu() {
    this.setState({
      showMobileMenuList: true,
    });
  }
  closeMobileMenu() {
    this.setState({
      showMobileMenuList: false,
    });
  }
  render() {
    return (
      <div className="mobile-menu">
        <IconButton style={styles} className={this.state.showMobileMenuList ? 'selected' : ''} color="inherit" aria-label="Menu" onClick={this.openMobileMenu.bind(this)}>
          <MenuIcon />
        </IconButton>
        <SubMenu {...subMenuMobileConfig} shouldBeVisible={this.state.showMobileMenuList} hide={this.closeMobileMenu.bind(this)} />
      </div>
    );
  } 
}

export default MobileMenu;
