import React from 'react';
import { Field, reduxForm } from 'redux-form';

import store from '../../../redux/store';

import { customInput } from './fields';
import { required, minLength, validEmail } from './validation';
// import './styles.css';

const handleSubmit = ({ history }) => () => {
  store.dispatch({
    type: 'SET_LOGGED_USER',
    logged: true
  });
  history.push('/app');
};

const Login = ({ history }) => (
  <form onSubmit={handleSubmit({ history })}>
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
      validate={[required, minLength]}
    />
    <button type="submit">Sign In</button>
  </form>
);

export default reduxForm({
  form: 'loginForm'
})(Login);
