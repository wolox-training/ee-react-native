import React, { Component } from 'react';
import classNames from 'classnames';

class CustomInput extends Component {
  getValidityClassName = function getValidityClassName(meta) {
    if (meta.active) {
      return '';
    }
    if (meta.touched && meta.invalid) {
      return 'invalid';
    }
    if (meta.touched && meta.valid) {
      return 'valid';
    }
    return '';
  };

  render() {
    return (
      <div
        className={classNames(
          'custom-input-container',
          { dirty: this.props.meta.dirty },
          this.getValidityClassName(this.props.meta)
        )}
      >
        <input {...this.props.input} type={this.props.type} />
        <label>{this.props.label}</label>
        {this.props.meta.error && this.props.meta.touched && !this.props.meta.active && (
          <span className="error-text">{this.props.meta.error}</span>
        )}
      </div>
    );
  }
}

export default CustomInput;
