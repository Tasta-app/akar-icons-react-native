import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Hammer = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="m4 22-2-2 1-1 2 2z"></path><path d="m9 13 2 2"></path><path d="m12 12-8 8"></path><path d="m20 4-1 1"></path><path d="M9.707 7.707a1 1 0 0 1 0-1.414l4.086-4.086a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-4.086 4.086a1 1 0 0 1-1.414 0z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Hammer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Hammer;
