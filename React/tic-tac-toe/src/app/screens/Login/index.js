import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../../constants/routes';
import LoginActions from '../../../redux/login/actions';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = (params) => {
    this.props.login({ email: params.email, password: params.password });
    this.props.history.push(routes.APP);
  };

  render() {
    return (
      <Fragment>
        <div className="auth-error">{this.props.authError}</div>
        <LoginForm onSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.login.authError
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(LoginActions.login(user))
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.func.isRequired,
  authError: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
