import React from 'react';
import { Redirect } from 'react-router-dom';

import routes from '../../constants/routes';

const withAuthorize = Component => ({ logged, ...rest }) =>
  logged ? <Component {...rest} /> : <Redirect to={routes.LOGIN} />;

export default withAuthorize;
