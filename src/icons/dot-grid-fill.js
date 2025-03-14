import React from 'react';
import PropTypes from 'prop-types';

const DotGridFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

DotGridFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default DotGridFill;
