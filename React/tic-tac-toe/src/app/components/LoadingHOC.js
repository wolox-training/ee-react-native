import React from 'react';
import { PacmanLoader } from 'react-spinners';

const withLoadingIndicator = Component => ({ pending, ...rest }) =>
  pending
    ? (
      <div>
        <PacmanLoader
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={pending}
        />
      </div>
    )
    : <Component {...rest} />;

export default withLoadingIndicator;
