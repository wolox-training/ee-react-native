import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../../redux/store';
import routes from '../../constants/routes';
import actions from '../../redux/login/actions';

class AuthorizedRoute extends Component {
  componentDidMount() {
    store.dispatch(actions.getLoggedUser());
  }

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

const mapStateToProps = ({ login }) => ({
  pending: login.pending,
  logged: login.logged
});

export default connect(mapStateToProps)(AuthorizedRoute);
