import React from 'react';
import PropTypes from 'prop-types';

const VimeoFill = ({ color = 'currentColor', size = '24', ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...otherProps}
  >
    <path d="M21.99 7.16q-.139 3.04-4.28 8.323Q13.43 21 10.462 21q-1.837-.002-3.106-3.359c-.564-2.055-1.127-4.11-1.697-6.16Q4.72 8.124 3.634 8.122c-.155 0-.707.33-1.645.98L1 7.837c1.035-.906 2.06-1.805 3.066-2.71 1.38-1.185 2.422-1.805 3.112-1.868 1.633-.153 2.64.951 3.02 3.325.408 2.556.69 4.15.851 4.77q.708 3.185 1.553 3.183.657 0 1.979-2.066 1.32-2.066 1.415-3.143.19-1.783-1.415-1.782-.75 0-1.553.342 1.546-5.03 5.913-4.885c2.157.057 3.175 1.446 3.049 4.156" />
  </svg>
);

VimeoFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VimeoFill;
