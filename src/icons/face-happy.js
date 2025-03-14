import React from 'react';
import PropTypes from 'prop-types';

const FaceHappy = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M8 9.05v-.1" />
    <path d="M16 9.05v-.1" />
    <path d="M16 14c-.5 1.5-1.79 3-4 3s-3.5-1.5-4-3" />
  </svg>
);

FaceHappy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FaceHappy;
