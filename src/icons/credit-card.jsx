import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const CreditCard = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="M12 10.016A2.8 2.8 0 0 0 9.857 9C8.28 9 7 10.343 7 12s1.28 3 2.857 3c.854 0 1.62-.393 2.143-1.016M17 12c0 1.657-1.28 3-2.857 3s-2.857-1.343-2.857-3 1.279-3 2.857-3S17 10.343 17 12"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CreditCard;
