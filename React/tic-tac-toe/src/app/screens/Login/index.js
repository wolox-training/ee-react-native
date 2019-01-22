import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../../constants/routes';
import actions from '../../../redux/login/actions';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = () => {
    this.props.setLoggedUser(true);
    this.props.history.push(routes.APP);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = {
  setLoggedUser: actions.setLoggedUser
};

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  setLoggedUser: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);
