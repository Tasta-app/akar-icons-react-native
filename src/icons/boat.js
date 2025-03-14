import React from 'react';
import PropTypes from 'prop-types';

const Boat = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="m16.926 19.382-4.302 1.413a2 2 0 0 1-1.248 0L7.074 19.38a4 4 0 0 1-2.623-2.794L3 11l9 1 9-1-1.451 5.587a4 4 0 0 1-2.623 2.794" />
    <path d="M6.497 7.257A2 2 0 0 1 8.354 6h7.292a2 2 0 0 1 1.857 1.257L19 11l-7 1-7-1z" />
    <path d="M12 3v3" />
    <path d="M11 3h2" />
    <path d="M12 12v4" />
  </svg>
);

Boat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Boat;
