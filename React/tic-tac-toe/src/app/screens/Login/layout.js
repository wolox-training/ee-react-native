import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, validEmail, minLength } from '../../../utils/validation';

import CustomInput from './components/fields';
import names from './components/fieldNames';
import labels from './components/fieldLabels';

import './styles.css';

const LoginForm = function LoginForm ({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name={names.EMAIL}
        component={CustomInput}
        type="text"
        label={labels.EMAIL}
        validate={[required, validEmail]}
      />
      <Field
        name={names.PASS}
        component={CustomInput}
        type="password"
        label={labels.PASS}
        validate={[required, minLength]}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
