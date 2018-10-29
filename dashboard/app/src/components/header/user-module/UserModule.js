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
    this.hideAll = this.hideAll.bind(this);
  }
  componentDidMount() {
    // Bind methods once component is mounted.
    this.setAccountMenuVisibility = this.setAccountMenuVisibility.bind(this);
    this.setNotificationsMenuVisibility = this.setNotificationsMenuVisibility.bind(this);
  }
  handleNotificationsIconClick(event) {
    if (this.checkIfMenuIsVisible('notifications')) {
      this.setNotificationsMenuVisibility(false);
    } else {
      this.setNotificationsMenuVisibility(true);
      this.setAccountMenuVisibility(false);
    }
  }
  handleProfileMenuOpen(event) {
    if (this.checkIfMenuIsVisible('account')) {
      this.setAccountMenuVisibility(false);
    } else {
      this.setAccountMenuVisibility(true);
      this.setNotificationsMenuVisibility(false);
    }
  }
  setAccountMenuVisibility(isVisible) {
    this.setState({
      isAccountMenuVisible: isVisible,
    });
  }
  setNotificationsMenuVisibility(isVisible) {
    this.setState({
      isNotificationsMenuVisible: isVisible,
    });
  }
  checkIfMenuIsVisible(menu) {
    if (menu === 'notifications') {
      return this.state.isNotificationsMenuVisible;
    }
    if (menu === 'account') {
      return this.state.isAccountMenuVisible;
    }
  }
  hideAll() {
    this.setAccountMenuVisibility(false);
    this.setNotificationsMenuVisibility(false);
  }
  hideOnClickOutSide() {
    this.hideAll();
  }
  render() {
    const submenuAccountConfig = {
      label: '',
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
        label: 'Notificaciones',
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
            className={this.state.isNotificationsMenuVisible ? 'user-module-icon selected' : 'user-module-icon'}
            aria-owns={'material-appbar'}
            aria-haspopup="true"
            onClick={this.handleNotificationsIconClick}
            color="inherit"
            >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            className={this.state.isAccountMenuVisible ? 'user-module-icon selected' : 'user-module-icon'}
            aria-owns={'material-appbar'}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
              >
            <AccountCircle />
          </IconButton>
        </div>

        <SubMenu {...submenuAccountConfig} shouldBeVisible={this.state.isAccountMenuVisible} hide={this.hideOnClickOutSide.bind(this)} />
        <SubMenu {...submenuNotificationsConfig} shouldBeVisible={this.state.isNotificationsMenuVisible} hide={this.hideOnClickOutSide.bind(this)} />
    
      </React.Fragment>
    );
  }
}

export default UserModule;
