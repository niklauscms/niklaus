import React from 'react';

import './Card.scss';

export default function (props) {
  return (
    <div className="Card">
      {props.title && (
      <h4>
        {props.title}
      </h4>
      )}
      {props.children}
    </div>
  );
}
