import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, validEmail, minLength } from '../../../utils/validation';

import CustomInput from './components/fields';
import { NAME_EMAIL, NAME_PASS } from './components/fieldNames';

import './styles.css';

const LoginForm = function LoginForm ({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name={NAME_EMAIL}
        component={CustomInput}
        type="text"
        label="E-mail"
        validate={[required, validEmail]}
      />
      <Field
        name={NAME_PASS}
        component={CustomInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
