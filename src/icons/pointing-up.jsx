import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const PointingUp = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="m19 16 .87-11.735a2.102 2.102 0 0 0-4.181-.433L15 9"></path><path d="M8 15v-3a2 2 0 1 0-4 0v4"></path><path d="M12 13v-1.5a2 2 0 1 0-4 0V15"></path><path d="M16 13v-2a2 2 0 1 0-4 0v2"></path><path d="M19 16c-.536 4-3.358 6-7.5 6S4 20 4 16"></path><path d="M13.692 17H11a2 2 0 1 1 0-4h4c2.21 0 4.5 2 3.5 5"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

PointingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PointingUp;
