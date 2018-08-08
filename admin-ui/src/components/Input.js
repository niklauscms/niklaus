import PropTypes from 'prop-types';
import React from 'react';

import './Input.scss';

export default function Input(props) {
  const {
    label, name, type, onChange,
  } = props;
  return (
    <div className="Input">
      {label && (
      <label
        className="Input__label"
        htmlFor={name}
      >
        {label}
      </label>
      )}
      <input
        className="Input__input"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}

Input.defaultProps = {
  label: '',
  name: '',
  type: '',
  onChange: null,
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
