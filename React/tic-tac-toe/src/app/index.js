import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Game from './screens/Game';
import Topbar from './components/Topbar';
import withLoadingIndicator from './components/LoadingHOC';
import withAuthorize from './components/AuthorizeHOC';

import '../scss/application.scss';

function App() {
  return (
    <Fragment>
      <Topbar />
      <Game />
    </Fragment>
  );
}

const mapStateToProps = store => ({
  logged: store.login.logged,
  user: store.login.user,
  userLoading: store.login.userLoading
});

const AppWithLoading = withLoadingIndicator(App);
const AppWithAuthorize = withAuthorize(AppWithLoading);

export default connect(mapStateToProps)(AppWithAuthorize);
