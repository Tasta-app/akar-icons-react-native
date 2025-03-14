import React from 'react';
import PropTypes from 'prop-types';

const VercelFill = ({ color = 'currentColor', size = '24', ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...otherProps}
  >
    <path d="m12 1 12 21H0z" />
  </svg>
);

VercelFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VercelFill;
