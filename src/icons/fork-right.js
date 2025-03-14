import React from 'react';
import PropTypes from 'prop-types';

const ForkRight = ({ color = 'currentColor', size = '24', ...otherProps }) => {
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
      <path d="M9 3v18M9 3l4 4M9 3 5 7"></path>
      <path d="m16 10 4 4-4 4"></path>
      <path d="M9 21a7 7 0 0 1 7-7h4"></path>
    </svg>
  );
};

ForkRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ForkRight;
