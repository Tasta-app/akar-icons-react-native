import React from 'react';
import PropTypes from 'prop-types';

const TriangleAlertFill = ({
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
      d="M14.543 2.598a2.821 2.821 0 0 0-5.086 0L1.341 18.563C.37 20.469 1.597 23 3.883 23h16.234c2.286 0 3.511-2.53 2.542-4.437zM12 8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m0 8.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);

TriangleAlertFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TriangleAlertFill;
