import React from 'react';
import PropTypes from 'prop-types';

const PersonCheck = ({
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
    <circle cx="12" cy="7" r="5" />
    <path d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" />
    <path d="m17 16.5 1.5 1.5 2.5-3" />
  </svg>
);

PersonCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PersonCheck;
