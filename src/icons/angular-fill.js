import React from 'react';
import PropTypes from 'prop-types';

const AngularFill = ({
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
      <path d="M10.174 12.594h3.652L12 8.095z"></path>
      <path d="M12 1 2 4.652l1.525 13.541L12 23l8.475-4.807L22 4.652zm6.24 16.786h-2.33l-1.257-3.212H9.347L8.09 17.786H5.76L12 3.431z"></path>
    </svg>
  );
};

AngularFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AngularFill;
