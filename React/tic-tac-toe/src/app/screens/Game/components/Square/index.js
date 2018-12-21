import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Square = ({ onClick, value }) => (
  <button
    type="button"
    className={styles.square}
    onClick={onClick}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
