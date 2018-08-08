import React from 'react';

import './Button.scss';

export default function (props) {
  // TODO: support non primary
  return <button className="Button Button__primary" type="submit" {...props} />;
}
