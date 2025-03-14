import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const FaceSad = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <circle cx="12" cy="12" r="10"></circle><path d="M8 9.05v-.1"></path><path d="M16 9.05v-.1"></path><path d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

FaceSad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FaceSad;
