import React from 'react';
import PropTypes from 'prop-types';

const Briefcase = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <rect width="18" height="12" x="3" y="7" rx="2" />
    <path d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9z" />
    <path d="m10 12 .211.106a4 4 0 0 0 3.578 0L14 12" />
  </svg>
);

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Briefcase;
