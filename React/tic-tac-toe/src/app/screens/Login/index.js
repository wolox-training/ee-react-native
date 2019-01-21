import React, { Component } from 'react';

import store from '../../../redux/store';
import routes from '../../../constants/routes';
import actions from '../../../redux/login/actions';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = () => {
    store.dispatch(actions.setLoggedUser(true));
    this.props.history.push(routes.APP);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
