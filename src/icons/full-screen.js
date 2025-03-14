import React from 'react';
import PropTypes from 'prop-types';

const FullScreen = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M2 7V2h5" />
    <path d="M22 7V2h-5" />
    <path d="M7 22H2v-5" />
    <path d="M17 22h5v-5" />
  </svg>
);

FullScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FullScreen;
