import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formValueSelector } from 'redux-form';

import routes from '../../../constants/routes';
import LoginActions from '../../../redux/login/actions';

import LoginForm from './layout';
import { NAME_EMAIL, NAME_PASS } from './components/fieldNames';

class Login extends Component {
  handleSubmit = () => {
    this.props.login({ email: this.props.email, password: this.props.pass });
    this.props.history.push(routes.APP);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

const selector = formValueSelector('loginForm');

const mapStateToProps = state => ({
  email: selector(state, NAME_EMAIL),
  pass: selector(state, NAME_PASS)
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(LoginActions.login(user)),
  getLoggedUser: () => dispatch(LoginActions.getLoggedUser())
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.func.isRequired,
  email: PropTypes.string,
  pass: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
