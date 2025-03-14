import React from 'react';
import PropTypes from 'prop-types';

const Hashtag = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="M10 3 6 21" />
    <path d="m18 3-4 18" />
    <path d="M4 8h17" />
    <path d="M3 16h17" />
  </svg>
);

Hashtag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Hashtag;
