import React from 'react';
import PropTypes from 'prop-types';

const CircleTriangleDownFill = ({
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
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-3.2 9a.81.81 0 0 0-.705.396.71.71 0 0 0 .04.77l3.2 4.5A.82.82 0 0 0 12 16a.82.82 0 0 0 .666-.334l3.2-4.5a.71.71 0 0 0 .04-.77A.81.81 0 0 0 15.2 10z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

CircleTriangleDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CircleTriangleDownFill;
