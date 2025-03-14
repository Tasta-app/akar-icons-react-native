import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M2 10s3.5 4 10 4 10-4 10-4" />
    <path d="M4 11.645 2 14" />
    <path d="m22 14-1.996-2.352" />
    <path d="M8.914 13.68 8 16.5" />
    <path d="M15.063 13.688 16 16.5" />
  </svg>
);

EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default EyeClosed;
