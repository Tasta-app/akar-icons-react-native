import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleRightFill = ({
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-2 7.8c0-.295.152-.566.396-.705a.71.71 0 0 1 .77.04l4.5 3.2A.82.82 0 0 1 16 12a.82.82 0 0 1-.334.666l-4.5 3.2a.71.71 0 0 1-.77.04A.81.81 0 0 1 10 15.2z"
      clipRule="evenodd"
    />
  </svg>
);

CircleTriangleRightFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CircleTriangleRightFill;
