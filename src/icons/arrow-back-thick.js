import React from 'react';
import PropTypes from 'prop-types';

const ArrowBackThick = ({
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
    <path d="m2 11 7-9v5c11.953 0 13.332 9.678 13 15-.502-2.685-.735-7-13-7v5z" />
  </svg>
);

ArrowBackThick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowBackThick;
