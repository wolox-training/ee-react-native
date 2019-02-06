import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Game from './screens/Game';
import Topbar from './components/Topbar';

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
  logged: store.login.logged
});

export default connect(mapStateToProps)(App);
