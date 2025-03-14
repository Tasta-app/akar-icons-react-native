import React from 'react';
import PropTypes from 'prop-types';

const AlignToMiddle = ({
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
    <path d="M12 2v6" />
    <path d="M12 22v-6" />
    <path d="m9 5 3 3 3-3" />
    <path d="m9 19 3-3 3 3" />
  </svg>
);

AlignToMiddle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AlignToMiddle;
