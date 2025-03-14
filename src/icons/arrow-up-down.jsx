import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const ArrowUpDown = ({
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
      <path d="M6 3v18M6 3l4 4M6 3 2 7"></path><path d="M18 21V3m0 18 4-4m-4 4-4-4"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

ArrowUpDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowUpDown;
