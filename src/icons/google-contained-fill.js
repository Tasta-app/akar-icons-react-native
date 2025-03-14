import React from 'react';
import PropTypes from 'prop-types';

const GoogleContainedFill = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0m.14 19.018c-3.868 0-7-3.14-7-7.018s3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585q.134.704.135 1.474c0 4.01-2.677 6.86-6.72 6.86"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
);

GoogleContainedFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GoogleContainedFill;
