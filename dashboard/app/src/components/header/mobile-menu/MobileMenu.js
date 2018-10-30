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
    },
    {
      label: 'Pedidos',
      url: '/orders',
    },
    {
      label: 'Solicitudes',
      url: '/entries',
    },
    {
      label: 'Estadísticas',
      url: '/stats',
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
        <IconButton style={styles} className={''} color="inherit" aria-label="Menu">
          <MenuIcon onClick={this.openMobileMenu.bind(this)} />
        </IconButton>
        <SubMenu {...subMenuMobileConfig} shouldBeVisible={this.state.showMobileMenuList} hide={this.closeMobileMenu.bind(this)} />
      </div>
    );
  } 
}

export default MobileMenu;
