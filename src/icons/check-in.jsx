import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const CheckIn = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M12 2a6 6 0 0 0-6 6c0 1.419.302 2.348 1.125 3.375L12 17l4.875-5.625C17.698 10.348 18 9.419 18 8a6 6 0 0 0-6-6"></path><path d="M5 15.143C3.149 15.87 2 16.881 2 18c0 2.21 4.477 4 10 4s10-1.79 10-4c0-1.119-1.149-2.13-3-2.857"></path><circle cx="12" cy="8" r="1"></circle>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

CheckIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CheckIn;
