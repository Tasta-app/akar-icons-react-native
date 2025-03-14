import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = ({
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
      <path d="m15 4-8 8 8 8"></path>
    </svg>
  );
};

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ChevronLeft;
