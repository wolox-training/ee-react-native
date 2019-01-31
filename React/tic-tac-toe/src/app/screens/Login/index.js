import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../../constants/routes';
import LoginActions from '../../../redux/login/actions';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = () => {
    this.props.login(true);
    this.props.history.push(routes.APP);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(LoginActions.login(user)),
  getLoggedUser: () => dispatch(LoginActions.getLoggedUser())
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Login);
