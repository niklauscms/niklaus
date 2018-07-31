import React from 'react';

import './Form.scss';

export default function (props) {
  console.log(props);
  return <form {...props} className="Form" />;
}
