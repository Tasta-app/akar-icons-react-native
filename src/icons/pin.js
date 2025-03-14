import React from 'react';
import PropTypes from 'prop-types';

const Pin = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <path d="m5 10.726-3 .505L11.23 2l-.504 3M12 16.881l-.77 2.042 7.693-7.692-2.042.769m-1.804 3.077L21 21M3.538 9.692l6.154-6.154.236.341a52.2 52.2 0 0 0 7.376 8.518l.235.218-4.924 4.923-.218-.234A52.2 52.2 0 0 0 3.88 9.928z" />
  </svg>
);

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pin;
