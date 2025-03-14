import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const LinkOn = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M9 12h6"></path><path d="M15 6h1a6 6 0 0 1 0 12h-1"></path><path d="M9 18H8A6 6 0 0 1 8 6h1"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

LinkOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LinkOn;
