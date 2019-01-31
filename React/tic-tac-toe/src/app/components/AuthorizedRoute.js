import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../constants/routes';

class AuthorizedRoute extends Component {
  authorizeAndRender = ({ pending, logged, ComponentRoute, ...rest }) => () => {
    if (pending) {
      return <div>Loading...</div>;
    }
    return logged
      ? <ComponentRoute {...rest} />
      : <Redirect to={routes.LOGIN} />;
  };

  render() {
    const { component: ComponentRoute, pending, logged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={this.authorizeAndRender({ pending, logged, ComponentRoute, ...rest })}
      />
    );
  }
}

const mapStateToProps = store => ({
  pending: store.login.pending,
  logged: store.login.logged
});

export default connect(mapStateToProps)(AuthorizedRoute);
