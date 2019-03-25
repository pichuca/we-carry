import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import browserUrlIncludes from '../../../../utils/browserUrlIncludes.js';

import './SubMenu.css';

class SubMenu extends Component {
  handleClickOutside() {
    this.props.hide();
  };
  render() {
    const HtmlComponent = () => (
      <div className="sub-menu">
        <h4>{this.props.label}</h4>
        <ul>
          {this.props.links.map((link, index) => {
            return <Link to={link.url} onClick={this.props.hide} key={index}><li className={link.id && browserUrlIncludes(link.id) ? 'selected' : ''}>{link.label}</li></Link>;
          })}
        </ul>
      </div>
    );
    return (
      <React.Fragment>
        {this.props.shouldBeVisible ? <HtmlComponent />: null}
      </React.Fragment>
    );
  }
}

export default onClickOutside(SubMenu);
