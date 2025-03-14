import React from 'react';
import PropTypes from 'prop-types';

const Cut = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <circle cx="7" cy="18" r="3" />
    <path d="M15 15 7 3" />
    <path d="m9 15 3-4.5M17 3l-3 4.5" />
    <circle cx="17" cy="18" r="3" />
  </svg>
);

Cut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cut;
