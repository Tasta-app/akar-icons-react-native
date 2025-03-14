import React from 'react';
import PropTypes from 'prop-types';

const Camera = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="m6.233 5.834.445-2.226A2 2 0 0 1 8.64 2h6.72a2 2 0 0 1 1.962 1.608l.445 2.226a1.88 1.88 0 0 0 1.387 1.454A3.76 3.76 0 0 1 22 10.934V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.066a3.76 3.76 0 0 1 2.846-3.646 1.88 1.88 0 0 0 1.387-1.454" />
    <circle cx="12" cy="14" r="4" />
    <path d="M11 6h2" />
  </svg>
);

Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Camera;
