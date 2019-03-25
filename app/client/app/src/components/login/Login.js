import React, { Component } from 'react';
import axios from 'axios';
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

const buttonsStyles = {
  border: '1px solid #EAEAEA',
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    };

    this.login = this.login.bind(this);
  }
  componentDidMount() {
    console.log('Login did mount.');
  }
  handleInputChange = name => event => {
    this.setState({
     [name]: event.target.value,
    });
  };
  login() {
    console.log(`User: ${this.state.user}, password: ${this.state.password}`);
    fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.user,
          password: this.state.password
        })
      }).then((response) => response.json)
        .then((response) => console.log(JSON.stringify(response)))
        .catch((error) => console.log(error));
  }
  render() {
    return (
      <React.Fragment>
        <Card style={cardStyles}>
          <CardContent>
            <h4>Crea una cuenta o registrate</h4>
            <div id="login-logo"></div>
            <TextField
              id="outlined-bare"
              className={'login-register-inputs'}
              placeholder="Usuario"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange('user')}
            />
            <TextField
              id="outlined-bare"
              className={'login-register-inputs'}
              placeholder="Contraseña"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange('password')}
              minLength={6}
            />
          </CardContent>
          <CardActions>
            <Button onClick={this.login} style={buttonsStyles} className={'login-register-inputs'} size="medium">Ingresar</Button>
          </CardActions>
        </Card>
      </React.Fragment>);
  }
}

export default Login;
