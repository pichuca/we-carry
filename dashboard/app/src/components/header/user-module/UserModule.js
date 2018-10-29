import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';

import './UserModule.css';

class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAccountIconClick = this.handleAccountIconClick.bind(this);
  }
  handleAccountIconClick(event) {
    console.log('click on account icon. Event ->: ', event);
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
            onClick={this.handleAccountIconClick}
            color="inherit"
            >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            className="user-module-icon"
            aria-owns={'material-appbar'}
            aria-haspopup="true"
            onClick={this.handleAccountIconClick}
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
