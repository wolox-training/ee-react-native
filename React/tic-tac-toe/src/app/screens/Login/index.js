import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import LoginActions from '../../../redux/login/actions';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = params => {
    this.props.login({ email: params.email, password: params.password });
  };

  render() {
    return (
      <Fragment>
        <div className="auth-error">{this.props.userError}</div>
        <LoginForm onSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  userError: store.login.userError
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(LoginActions.login(user))
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  userError: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
