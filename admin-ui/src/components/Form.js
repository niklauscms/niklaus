import React from 'react';

import './Form.scss';

export default function (props) {
  function onSubmit(e) {
    e.preventDefault();
    return props.onSubmit(e);
  }

  return <form {...props} onSubmit={onSubmit} className="Form" />;
}
