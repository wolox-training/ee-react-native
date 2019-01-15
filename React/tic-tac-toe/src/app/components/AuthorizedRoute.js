import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../../redux/store';

class AuthorizedRoute extends React.Component {
  componentDidMount() {
    store.dispatch({
      type: 'GET_LOGGED_USER'
    });
  }

  renderear = ({ pending, logged, Component, ...rest }) => () => {
    if (pending) {
      return <div>Loading...</div>;
    }
    return logged
      ? <Component {...rest} />
      : <Redirect to="/auth/login" />;
  };

  render() {
    const { component: Component, pending, logged, ...rest } = this.props;

    return (
      <Route
        {...rest} render={this.renderear({ pending, logged, Component, ...rest })}
      />
    );
  }
}

const mapStateToProps = ({ login }) => ({
  pending: login.pending,
  logged: login.logged
});

export default connect(mapStateToProps)(AuthorizedRoute);
