import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const History = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M4.266 16.06a8.92 8.92 0 0 0 3.915 3.978 8.7 8.7 0 0 0 5.471.832 8.8 8.8 0 0 0 4.887-2.64 9.07 9.07 0 0 0 2.388-5.079 9.14 9.14 0 0 0-1.044-5.53 8.9 8.9 0 0 0-4.069-3.815 8.7 8.7 0 0 0-5.5-.608c-1.85.401-3.366 1.313-4.62 2.755-.151.16-.735.806-1.22 1.781M7.5 8l-3.609.72L3 5m9 4v4l3 2"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

History.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default History;
