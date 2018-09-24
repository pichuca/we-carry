import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    backgroundColor: '#E7E7E7',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="" src="" className={classes.avatar} />
    </div>
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
