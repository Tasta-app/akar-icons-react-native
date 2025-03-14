import React from 'react';
import PropTypes from 'prop-types';

const CirclePlus = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

CirclePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CirclePlus;
