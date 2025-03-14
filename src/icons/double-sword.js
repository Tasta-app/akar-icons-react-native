import React from 'react';
import PropTypes from 'prop-types';

const DoubleSword = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <path d="M2 19.2 3.8 21m.9-7.2.9 3.6m0 0 3.6.9m-3.6-.9-2.7 2.7M16.4 3.9l-9 9 .45 2.25 2.25.45 9-9L20 3z" />
    <path d="M22 19.2 20.2 21m-.9-7.2-.9 3.6m0 0 2.7 2.7m-2.7-2.7-1.8.45-1.8.45M9.3 11 4.9 6.6 4 3l3.6.9L12 8.3m.1 5.5 1.8 1.8 2.25-.45.45-2.25-1.8-1.8" />
  </svg>
);

DoubleSword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DoubleSword;
