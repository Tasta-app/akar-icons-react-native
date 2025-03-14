import React from 'react';
import PropTypes from 'prop-types';

const Glasses = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <circle cx="6" cy="14" r="4" />
    <circle cx="18" cy="14" r="4" />
    <path d="m10 14 .211-.106a4 4 0 0 1 3.578 0L14 14" />
    <path d="m19 6 2.838 6.623a2 2 0 0 1 .162.788V14" />
    <path d="m5 6-2.838 6.623A2 2 0 0 0 2 13.41V14" />
  </svg>
);

Glasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Glasses;
