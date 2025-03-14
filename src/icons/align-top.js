import React from 'react';
import PropTypes from 'prop-types';

const AlignTop = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M21 2H3" />
    <path d="M6 22V6h4v16z" />
    <path d="M14 16V6h4v10z" />
  </svg>
);

AlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AlignTop;
