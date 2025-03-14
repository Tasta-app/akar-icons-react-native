import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const TabletDevice = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <rect width="16" height="20" x="4" y="2" rx="2"></rect><path d="M11 18h2"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

TabletDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TabletDevice;
