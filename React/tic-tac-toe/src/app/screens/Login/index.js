import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput } from './fields';

const handleSubmit = () => 'hi';

const Login = () => (
  <form onSubmit={handleSubmit}>
    <Field
      name="user"
      component={customInput}
      type="text"
      label="User"
    />
    <Field
      name="password"
      component={customInput}
      type="password"
      label="Password"
    />
    <button type="submit">Submit</button>
  </form>
);

export default Login;
