import React from 'react';
import PropTypes from 'prop-types';

const Bicycle = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <circle cx="6" cy="15" r="4" />
    <circle cx="18" cy="15" r="4" />
    <path d="m6 15 2-7h7.5" />
    <path d="M6 5h3" />
    <path d="M18 15 15 5h4" />
    <path d="M19 5h.5A1.5 1.5 0 0 1 21 6.5v0A1.5 1.5 0 0 1 19.5 8H19" />
  </svg>
);

Bicycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Bicycle;
