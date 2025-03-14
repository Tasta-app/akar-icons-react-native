import React from 'react';
import PropTypes from 'prop-types';

const MobileDevice = ({
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
    <rect width="12" height="20" x="6" y="2" rx="2" />
    <path d="M11.95 18h.1" />
  </svg>
);

MobileDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MobileDevice;
