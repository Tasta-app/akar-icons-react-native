import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const ArrowBack = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="m8 5-5 5 5 5"></path><path d="M3 10h8c5.523 0 10 4.477 10 10v1"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

ArrowBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowBack;
