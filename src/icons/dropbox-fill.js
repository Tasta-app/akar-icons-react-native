import React from 'react';
import PropTypes from 'prop-types';

const DropboxFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...otherProps}
  >
    <path d="m6 2 6 3.75L6 9.5 0 5.75zm12 0 6 3.75-6 3.75-6-3.75zM0 13.25 6 9.5l6 3.75L6 17zM18 9.5l6 3.75L18 17l-6-3.75zM6 18.25l6-3.75 6 3.75L12 22z" />
  </svg>
);

DropboxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DropboxFill;
