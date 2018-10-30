import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../commons/date-picker/DatePicker';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 80,
  },
});

const datePickerConfig = {
  id: 'date',
  label: 'Fecha de ingreso',
  type: 'date',
};

class InputAdornments extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.margin}>
          <TextField
            label="Nombre del producto"
            id="simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Cantidad de items"
            onChange={this.handleChange('age')}
            type="number"
            className={classNames(classes.margin, classes.textField)}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="adornment-weight"
            label="Peso"
            value={this.state.weight}
            onChange={this.handleChange('weight')}
            type="number"
            className={classNames(classes.margin, classes.textField)}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Descripción"
            value=""
            type="text"
            className={classNames(classes.margin, classes.textField)}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <DatePicker {...datePickerConfig} />
        </FormControl>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
