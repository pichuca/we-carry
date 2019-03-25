import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const cardStyles = {
  border: '1px solid #EAEAEA',
  height: '310px',
  maxWidth: '540px',
  minWidth: '300px',
  margin: '0 auto'
};

const buttonsStyles = {
  border: '1px solid #EAEAEA',
};

class LoginRegister extends Component {
  componentDidMount() {
    console.log('LoginResgister did mount.');
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
          <CardContent>
            <h4>Crea una cuenta o registrate</h4>
            <div id="login-logo"></div>
          </CardContent>
          <CardActions>
            <Button style={buttonsStyles} className={'login-register-button'} size="medium">Ingresar</Button>
          </CardActions>
          <CardActions>
            <Button style={buttonsStyles} className={'login-register-button'} size="medium">Registrarse</Button>
          </CardActions>
        </Card>
      </React.Fragment>);
  }
}

export default LoginRegister;
