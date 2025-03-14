import React from 'react';
import PropTypes from 'prop-types';

const AlignVerticalCenter = ({
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
    <path d="M21 12H3" />
    <path d="M6 16v4h4v-4" />
    <path d="M14 16v2h4v-2" />
    <path d="M14 8V6h4v2" />
    <path d="M10 8V4H6v4" />
  </svg>
);

AlignVerticalCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AlignVerticalCenter;
