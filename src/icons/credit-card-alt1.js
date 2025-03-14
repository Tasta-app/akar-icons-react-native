import React from 'react';
import PropTypes from 'prop-types';

const CreditCardAlt1 = ({
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <rect width="2" height="2" x="6" y="8" />
  </svg>
);

CreditCardAlt1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CreditCardAlt1;
