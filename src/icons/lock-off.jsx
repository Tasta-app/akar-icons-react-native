import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const LockOff = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <rect width="18" height="12" x="3" y="10" rx="2"></rect><path d="M6 10V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

LockOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LockOff;
