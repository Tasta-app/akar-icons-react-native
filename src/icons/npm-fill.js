import React from 'react';
import PropTypes from 'prop-types';

const NpmFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          d="M24 0H0v24h24zM2.578 2.578H21.42V21.42H16.67V7.33h-4.751V21.42h-9.34z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

NpmFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default NpmFill;
