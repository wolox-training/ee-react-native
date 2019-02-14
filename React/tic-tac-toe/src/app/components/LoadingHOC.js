import React from 'react';
import { PacmanLoader } from 'react-spinners';

const withLoadingIndicator = Component => ({ userLoading, ...rest }) =>
  userLoading
    ? (
      <div>
        <PacmanLoader
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={userLoading}
        />
      </div>
    )
    : <Component {...rest} />;

export default withLoadingIndicator;
