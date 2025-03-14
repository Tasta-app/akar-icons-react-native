import React from 'react';
import PropTypes from 'prop-types';

const Crown = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="m2 8 1.304 1.043a4 4 0 0 0 5.995-1.181L12 3l2.701 4.862a4 4 0 0 0 5.996 1.18L22 8l-1.754 8.77a2.56 2.56 0 0 1-1.367 1.79v0a15.38 15.38 0 0 1-13.758 0v0a2.56 2.56 0 0 1-1.367-1.79z" />
    <path d="M8 15c2.596 1.333 5.404 1.333 8 0" />
  </svg>
);

Crown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Crown;
