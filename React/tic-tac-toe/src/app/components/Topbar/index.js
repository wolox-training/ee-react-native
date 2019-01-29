import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginActions from '../../../redux/login/actions';
import routes from '../../../constants/routes';
import { history } from '../../../history';

class Topbar extends Component {
  handleLogout = () => {
    this.props.logout();
  }

  handleRedirect = () => {
    history.push(routes.PROFILE);
  }

  render() {
    return (
      <div className="topbar">
        <button type="button" onClick={this.handleLogout}>Logout</button>
        <button type="button" onClick={this.handleRedirect}>Other view</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LoginActions.logout())
});

Topbar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Topbar);
