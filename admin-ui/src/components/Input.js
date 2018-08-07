import React from 'react';

import './Input.scss';

export default function (props) {
  return (
    <div className="Input">
      {props.label && (
      <label
        className="Input__label"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      )}
      <input
        className="Input__input"
        id={props.name}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
}
