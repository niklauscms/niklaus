import PropTypes from 'prop-types';
import React from 'react';

import './Card.scss';

export default function Card(props) {
  const { title, children } = props;
  return (
    <div className="Card">
      {title && (
      <h4>
        {title}
      </h4>
      )}
      {children}
    </div>
  );
}

Card.defaultProps = {
  title: '',
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
