import React from 'react';
import PropTypes from 'prop-types';

const VapeKit = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
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
      <path d="M3 10a1 1 0 0 1 1-1h6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path>
      <path d="M13 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6h-8z"></path>
      <rect width="4" height="3" x="15" y="9"></rect>
      <rect width="4" height="5" x="6" y="4"></rect>
      <path d="M8 4V2"></path>
      <path d="M17 9V6"></path>
      <path d="M17 17v-5"></path>
    </svg>
  );
};

VapeKit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default VapeKit;
