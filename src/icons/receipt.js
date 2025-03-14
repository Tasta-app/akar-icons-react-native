import React from 'react';
import PropTypes from 'prop-types';

const Receipt = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M19 21H7a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13c0 1.657.343 3 2 3" />
    <path d="M21 10a2 2 0 0 0-2-2h-2v10.5c0 1.38.62 2.5 2 2.5s2-1.12 2-2.5z" />
    <path d="M13 11H7" />
    <path d="M13 7H7" />
    <path d="M10 15H7" />
  </svg>
);

Receipt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Receipt;
