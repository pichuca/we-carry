import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import SubMenu from './sub-menu/SubMenu';

import './UserModule.css';

class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotificationsMenuVisible: false,
      isAccountMenuVisible: false,
    };

    this.handleNotificationsIconClick = this.handleNotificationsIconClick.bind(this);
    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.checkIfMenuIsVisible = this.checkIfMenuIsVisible.bind(this);
  }
  handleNotificationsIconClick(event) {
    console.log('handleNotificationsIconClick() event: ', event);
    if (this.checkIfMenuIsVisible('notifications')) {
      this.setState({
        isNotificationsMenuVisible: false,
      });
    } else {
      this.setState({
        isNotificationsMenuVisible: true,
      });
    }
  }
  handleProfileMenuOpen(event) {
    console.log('handleProfileMenuOpen() event: ', event);
    if (this.checkIfMenuIsVisible('account')) {
        this.setState({
          isAccountMenuVisible: false,
        });
    } else {
    this.setState({
        isAccountMenuVisible: true,
    });
    }
  }
  checkIfMenuIsVisible(menu) {
    if (menu === 'notifications') {
      return this.state.isNotificationsMenuVisible;
    }
    if (menu === 'account') {
      return this.state.isAccountMenuVisible;
    }
  }
  render() {
    const submenuAccountConfig = {
      label: 'Menu de usuario',
      links: [
        {
          label: 'Editar perfil',
          url: '/edit/profile',
        },
        {
          label: 'Cerrar sesión',
          url: '/logout',
        }
      ],
    };
    const submenuNotificationsConfig = {
        label: 'Menu de notificaciones',
        links: [
          {
            label: 'Tu producto fue entregado',
            url: '/notificastions/id',
          },
          {
            label: 'Tu producto fue demorado...',
            url: '/notificastions/id',
          }
        ],
      };
    return(
      <React.Fragment>
        <div className="user-module">
          <div className="user-name">
            <h6><span>Bienvenido,</span> {this.props.userName}</h6>
          </div>
          <IconButton
            className="user-module-icon"
            aria-owns={'material-appbar'}
            aria-haspopup="true"
            onClick={this.handleNotificationsIconClick}
            color="inherit"
            >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            className="user-module-icon"
            aria-owns={'material-appbar'}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
              >
            <AccountCircle />
          </IconButton>
          {/* <IconButton
            className="user-module-icon"
            aria-owns={'material-appbar'}
            aria-haspopup="true"
            onClick={this.handleAccountIconClick}
            color="inherit">
            <MoreIcon />
          </IconButton> */}
        </div>
        {this.state.isAccountMenuVisible ? <SubMenu {...submenuAccountConfig} /> : null }
        {this.state.isNotificationsMenuVisible ? <SubMenu {...submenuNotificationsConfig} /> : null }
    
      </React.Fragment>
    );
  }
}

export default UserModule;
