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

class Login extends Component {
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
          <CardContent>
            <h4>Crea una cuenta o registrate</h4>
            <div id="login-logo"></div>
            <TextField
              id="outlined-bare"
              className={'login-button'}
              placeholder="Ingresar"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange('name')}
            />
            <TextField
              id="outlined-bare"
              className={'register-button'}
              placeholder="Registrarse"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange('name')}
            />
          </CardContent>
          <CardActions>
            <Button size="medium">Ingresar</Button>
            <Button size="medium">Registrarse</Button>
          </CardActions>
        </Card>
      </React.Fragment>);
  }
}

export default Login;
