import React from 'react';
import PropTypes from 'prop-types';

const Network = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <circle cx="18" cy="5" r="3" />
    <circle cx="18" cy="19" r="3" />
    <circle cx="6" cy="12" r="3" />
    <path d="m15.408 6.512-6.814 3.975m6.814 7.001-6.814-3.975" />
  </svg>
);

Network.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Network;
