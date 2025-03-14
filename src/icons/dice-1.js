import React from 'react';
import PropTypes from 'prop-types';

const Dice1 = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M12.25 11.75v.5" />
    <path d="M12 12h.5" />
  </svg>
);

Dice1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dice1;
