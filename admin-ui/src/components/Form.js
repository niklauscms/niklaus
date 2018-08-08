import PropTypes from 'prop-types';
import React from 'react';

import './Form.scss';

export default function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    return props.onSubmit(e);
  }

  return <form {...props} onSubmit={onSubmit} className="Form" />;
}

Form.defaultProps = {
  onSubmit: null,
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};
