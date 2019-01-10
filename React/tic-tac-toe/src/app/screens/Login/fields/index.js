import React from 'react';

export const customInput = props => (
  <div>
    <label>{props.label}</label>
    <input {...props.input} type={props.type} />
  </div>
);
