import React from 'react';
import { Redirect } from 'react-router-dom';

import routes from '../../constants/routes';

const withAuthorize = Component => ({ user, ...rest }) =>
  user ? <Component {...rest} /> : <Redirect to={routes.LOGIN} />;

export default withAuthorize;
