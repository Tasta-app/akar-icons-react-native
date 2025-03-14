import React from 'react';
import PropTypes from 'prop-types';

const ArrowCounterClockwise = ({
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
      <path d="M4.266 16.06a8.92 8.92 0 0 0 3.915 3.978 8.7 8.7 0 0 0 5.471.832 8.8 8.8 0 0 0 4.887-2.64 9.07 9.07 0 0 0 2.388-5.079 9.14 9.14 0 0 0-1.044-5.53 8.9 8.9 0 0 0-4.068-3.815 8.7 8.7 0 0 0-5.5-.608c-1.85.401-3.367 1.313-4.62 2.755-.152.16-.736.806-1.22 1.781"></path>
      <path d="m8.931 7.813-5.04.907L3 3.59"></path>
    </svg>
  );
};

ArrowCounterClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ArrowCounterClockwise;
