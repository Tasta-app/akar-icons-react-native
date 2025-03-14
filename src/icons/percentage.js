import React from 'react';
import PropTypes from 'prop-types';

const Percentage = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M5 19 19 5" />
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="17" r="3" />
  </svg>
);

Percentage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Percentage;
