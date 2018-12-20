import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

/*
const Square = ({value }) => (
  <button type="button" className={styles.square} onClick={() => alert('click') }>
    {value}
  </button>
);
*/

class Square extends Component {
  state = {
    value: null
  };

  setState = this.setState.bind(this);

  render() {
    return (
      <button
        type="button"
        className={styles.square}
        onClick={this.setState({ value: 'X' })}
      >
        {this.state.value}
      </button>
    );
  }
}

Square.propTypes = {
};

export default Square;
