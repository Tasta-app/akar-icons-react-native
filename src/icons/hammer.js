import React from 'react';
import PropTypes from 'prop-types';

const Hammer = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="m4 22-2-2 1-1 2 2z" />
    <path d="m9 13 2 2" />
    <path d="m12 12-8 8" />
    <path d="m20 4-1 1" />
    <path d="M9.707 7.707a1 1 0 0 1 0-1.414l4.086-4.086a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-4.086 4.086a1 1 0 0 1-1.414 0z" />
  </svg>
);

Hammer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Hammer;
