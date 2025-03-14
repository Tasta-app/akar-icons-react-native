import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const EyeClosed = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M2 10s3.5 4 10 4 10-4 10-4"></path><path d="M4 11.645 2 14"></path><path d="m22 14-1.996-2.352"></path><path d="M8.914 13.68 8 16.5"></path><path d="M15.063 13.688 16 16.5"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default EyeClosed;
