import React from 'react';
import PropTypes from 'prop-types';

const DoubleCheck = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
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
      <path d="m2 12 5.25 5 2.625-3"></path>
      <path d="m8 12 5.25 5L22 7"></path>
      <path d="m16 7-3.5 4"></path>
    </svg>
  );
};

DoubleCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default DoubleCheck;
