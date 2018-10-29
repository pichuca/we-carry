import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';

import './UserModule.css';

class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleNotificationsIconClick = this.handleNotificationsIconClick.bind(this);
    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
  }
  handleNotificationsIconClick(event) {
    console.log('handleNotificationsIconClick() event: ', event);
  }
  handleProfileMenuOpen(event) {
    console.log('handleProfileMenuOpen() event: ', event);
  }
  render() {
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
      </React.Fragment>
    );
  }
}

export default UserModule;
