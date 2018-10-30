import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './MobileMenu.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mobile-menu">
        <IconButton style={styles} className={''} color="blue" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </div>
    );
  } 
}

export default MobileMenu;
