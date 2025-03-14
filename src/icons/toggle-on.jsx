import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const ToggleOn = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <rect width="20" height="10" x="2" y="7" rx="5"></rect><circle cx="17" cy="12" r="5"></circle>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

ToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ToggleOn;
