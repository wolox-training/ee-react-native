import React, { Component } from 'react';

import store from '../../../redux/store';

import LoginForm from './components/LoginForm';

// Separé el container del presentacional. Este es el container se supone
// El form no me toma los errores. Muestra los mensajes de error pero hasta ahi nomas
/*
const Login = ({ history }) => (
  <LoginForm onSubmit={handleSubmit} />
);
*/

class Login extends Component {
  handleSubmit = () => {
    store.dispatch({
      type: 'SET_LOGGED_USER',
      logged: true
    });
    this.props.history.push('/app');
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
