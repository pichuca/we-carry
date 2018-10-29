import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './SubMenu.css';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="sub-menu">
          <h4>{this.props.label}</h4>
          {this.props.links.forEach((link) => {
            return <Link to={link.url}>link.label</Link>
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SubMenu;
