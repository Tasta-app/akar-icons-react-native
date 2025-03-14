import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Flashlight = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M5 4v1c0 1.636 2 4 3 5l.75 9.01A3.26 3.26 0 0 0 12 22v0a3.26 3.26 0 0 0 3.25-2.99L16 10c1-1 3-3.364 3-5V4"></path><path d="M12 11v2"></path><ellipse cx="12" cy="4" rx="7" ry="2"></ellipse>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Flashlight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Flashlight;
