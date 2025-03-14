import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleLeftFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...otherProps}
  >
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m2 7.8a.81.81 0 0 0-.396-.705.71.71 0 0 0-.77.04l-4.5 3.2A.82.82 0 0 0 8 12c0 .268.125.517.334.666l4.5 3.2a.71.71 0 0 0 .77.04A.81.81 0 0 0 14 15.2z"
      clipRule="evenodd"
    />
  </svg>
);

CircleTriangleLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CircleTriangleLeftFill;
