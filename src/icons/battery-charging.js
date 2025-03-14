import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharging = ({
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
    <rect width="18" height="12" x="2" y="6" rx="2" />
    <path d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20z" />
    <path d="M11.4 9 9 12h4l-2.4 3" />
  </svg>
);

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BatteryCharging;
