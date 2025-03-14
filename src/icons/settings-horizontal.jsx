import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const SettingsHorizontal = ({
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
      <path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"></path><circle cx="9" cy="5" r="2"></circle><circle cx="17" cy="12" r="2"></circle><circle cx="7" cy="19" r="2"></circle>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

SettingsHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SettingsHorizontal;
