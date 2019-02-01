import React from 'react';

const withLoadingIndicator = Component => ({ pending, ...rest }) =>
  pending
    ? <div><p>Loading...</p></div>
    : <Component {...rest} />;

export default withLoadingIndicator;
