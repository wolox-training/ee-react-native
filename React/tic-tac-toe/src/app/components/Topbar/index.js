import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginActions from '../../../redux/login/actions';

class Topbar extends Component {
  handleClick = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className="topbar">
        <button type="button" onClick={this.handleClick}>Logout</button>
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
