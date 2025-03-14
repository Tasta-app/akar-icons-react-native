import React from 'react';
import PropTypes from 'prop-types';

const Sword = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="m18 3 4-1-1 4-10 10-2.5-.5L8 13z"></path>
      <path d="m2 20 2 2"></path>
      <path d="m5 14 1 4 4 1"></path>
      <path d="m6 18-3 3"></path>
    </svg>
  );
};

Sword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Sword;
