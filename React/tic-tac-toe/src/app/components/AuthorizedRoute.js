import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../constants/routes';
import LoginActions from '../../redux/login/actions';

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

const mapStateToProps = state => ({
  pending: state.login.pending,
  logged: state.login.logged
});

const mapDispatchToProps = dispatch => ({
  getLogged: () => dispatch(LoginActions.getLoggedUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);
