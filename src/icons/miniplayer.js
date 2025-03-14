import React from 'react';
import PropTypes from 'prop-types';

const Miniplayer = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <rect width="9" height="7" x="13" y="13" rx="2"></rect>
    </svg>
  );
};

Miniplayer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Miniplayer;
