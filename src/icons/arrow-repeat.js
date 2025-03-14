import React from 'react';
import PropTypes from 'prop-types';

const ArrowRepeat = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => (
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
    <path d="m18 2 3 3-3 3" />
    <path d="m6 22-3-3 3-3" />
    <path d="M21 5H10a7 7 0 0 0-7 7" />
    <path d="M3 19h11a7 7 0 0 0 7-7" />
  </svg>
);

ArrowRepeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowRepeat;
