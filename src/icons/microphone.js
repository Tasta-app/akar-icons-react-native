import React from 'react';
import PropTypes from 'prop-types';

const Microphone = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <rect width="8" height="13" x="8" y="2" rx="4" />
    <path d="M18 16.292A7.98 7.98 0 0 1 12 19a7.98 7.98 0 0 1-6-2.708" />
    <path d="M12 19v3" />
    <path d="M10 22h4" />
  </svg>
);

Microphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Microphone;
