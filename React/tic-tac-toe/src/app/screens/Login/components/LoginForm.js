import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput } from '../fields';
import { required, validEmail } from '../validation';
import './LoginForm.css';


// Presentacional que luego renderea el Login
// const LoginForm = ({ onSubmit }) => (
class LoginForm extends Component {

  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="email"
          component={customInput}
          type="text"
          label="E-mail"
          validate={[required, validEmail]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required]}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
