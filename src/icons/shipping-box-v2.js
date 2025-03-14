import React from 'react';
import PropTypes from 'prop-types';

const ShippingBoxV2 = ({
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
    <path d="M11.029 2.54a2 2 0 0 1 1.942 0l7.515 4.174a1 1 0 0 1 .514.874v8.235a2 2 0 0 1-1.029 1.749l-7 3.888a2 2 0 0 1-1.942 0l-7-3.889A2 2 0 0 1 3 15.824V7.588a1 1 0 0 1 .514-.874z" />
    <path d="m7.5 4.5 9 5V13" />
    <path d="M6 12.328 9 14" />
    <path d="m3 7 9 5m0 0 9-5m-9 5v9.5" />
  </svg>
);

ShippingBoxV2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ShippingBoxV2;
