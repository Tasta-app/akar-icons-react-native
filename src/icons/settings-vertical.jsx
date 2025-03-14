import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const SettingsVertical = ({
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
      <path d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9"></path><circle cx="19" cy="9" r="2" transform="rotate(90 19 9)"></circle><circle cx="12" cy="17" r="2" transform="rotate(90 12 17)"></circle><circle cx="5" cy="7" r="2" transform="rotate(90 5 7)"></circle>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

SettingsVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SettingsVertical;
