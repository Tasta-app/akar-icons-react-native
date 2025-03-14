import React from 'react';
import PropTypes from 'prop-types';

const Gift = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <rect width="18" height="14" x="3" y="8" rx="2" />
    <path d="M12 5a3 3 0 1 0-3 3" />
    <path d="M15 8a3 3 0 1 0-3-3" />
    <path d="M12 5v17" />
    <path d="M21 15H3" />
  </svg>
);

Gift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Gift;
