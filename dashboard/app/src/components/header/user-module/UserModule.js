import React, { Component } from 'react';
import './UserModule.css';

class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <React.Fragment>
        <div className="user-module">
          {this.props.userName}
          <img src="" width="" height="" alt="user company logo" />
        </div>
      </React.Fragment>
    );
  }
}

export default UserModule;
