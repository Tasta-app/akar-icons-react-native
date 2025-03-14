import React from 'react';
import PropTypes from 'prop-types';

const CircleChevronDown = ({
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
    <circle cx="12" cy="12" r="10" />
    <path d="m8 10.5 4 4 4-4" />
  </svg>
);

CircleChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CircleChevronDown;
