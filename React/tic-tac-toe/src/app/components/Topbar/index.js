import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginActions from '../../../redux/login/actions';
import ScreenActions from '../../../redux/screen/actions';
import routes from '../../../constants/routes';
import { history } from '../../../history';

import './styles.css';

class Topbar extends Component {
  handleLogout = () => {
    this.props.logout();
  }

  handleRedirectProfile = () => {
    this.props.setScreen(routes.PROFILE);
    history.push(routes.PROFILE);
  }

  handleRedirectHome = () => {
    this.props.setScreen(routes.APP);
    history.push(routes.APP);
  }

  render() {
    return (
      <div className="topbar">
        <button type="button" className={this.props.screen === routes.APP ? 'button home active' : 'button home'} onClick={this.handleRedirectHome}>Tic-tac-toe</button>
        <button type="button" className={this.props.screen === routes.PROFILE ? 'button view-link active' : 'button view-link'} onClick={this.handleRedirectProfile}>Profile</button>
        <button type="button" className="button logout" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  screen: store.screen.screen
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LoginActions.logout()),
  setScreen: screen => dispatch(ScreenActions.setScreen(screen))
});

Topbar.propTypes = {
  logout: PropTypes.func.isRequired,
  setScreen: PropTypes.func.isRequired,
  screen: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
