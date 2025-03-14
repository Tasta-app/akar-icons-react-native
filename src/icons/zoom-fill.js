import React from 'react';
import PropTypes from 'prop-types';

const ZoomFill = ({ color = 'currentColor', size = '24', ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...otherProps}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M6 16.2h9V9.6a1.8 1.8 0 0 0-1.8-1.8h-9v6.6A1.8 1.8 0 0 0 6 16.2m10.2-2.4 3.6 2.4V7.8l-3.6 2.4z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
);

ZoomFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ZoomFill;
