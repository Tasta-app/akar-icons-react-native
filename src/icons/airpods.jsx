import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Airpods = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M14 7c0 2.21 1.644 4 4 4s4-1.79 4-4-1.644-4-4-4-4 1.79-4 4Z"></path><path d="M10 7c0 2.21-1.644 4-4 4S2 9.21 2 7s1.644-4 4-4 4 1.79 4 4Z"></path><path d="M14 7v12a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-8"></path><path d="M14 17h4"></path><path d="M6 17h4"></path><path d="M10 7v12a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-8"></path><path d="M20 4a5.41 5.41 0 0 0 0 6"></path><path d="M4 4a5.41 5.41 0 0 1 0 6"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Airpods.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Airpods;
