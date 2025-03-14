import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleUpFill = ({
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M8.8 14a.81.81 0 0 1-.705-.396.71.71 0 0 1 .04-.77l3.2-4.5A.82.82 0 0 1 12 8c.268 0 .517.125.666.334l3.2 4.5a.71.71 0 0 1 .04.77.81.81 0 0 1-.706.396z"
      clipRule="evenodd"
    />
  </svg>
);

CircleTriangleUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CircleTriangleUpFill;
