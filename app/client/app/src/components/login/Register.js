import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const cardStyles = {
  border: '1px solid #EAEAEA',
  height: '460px',
  maxWidth: '540px',
  minWidth: '300px',
  margin: '0 auto'
};

class Register extends Component {
  componentDidMount() {
    console.log('Login did mount.');
  }
  handleInputChange = name => event => {
    console.log(event.target.value)
    this.setState({
     [name]: event.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Card style={cardStyles}>
          <h1>Resgiter!</h1>
        </Card>
      </React.Fragment>);
  }
}

export default Register;
