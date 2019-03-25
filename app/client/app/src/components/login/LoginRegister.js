import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            <Link id="login" to="/login" className={'login-register-inputs'}>
              <Button style={buttonsStyles} className={'login-register-inputs'} size="medium">Ingresar</Button>
            </Link>
          </CardActions>
          <CardActions>
            <Link id="login" to="/register" className={'login-register-inputs'}>
              <Button style={buttonsStyles} className={'login-register-inputs'} size="medium">Registrarse</Button>
            </Link>
          </CardActions>
        </Card>
      </React.Fragment>);
  }
}

export default LoginRegister;
