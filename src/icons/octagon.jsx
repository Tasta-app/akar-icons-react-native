import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Octagon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M11.235 2.317a2 2 0 0 1 1.53 0l5.54 2.295a2 2 0 0 1 1.083 1.082l2.295 5.54a2 2 0 0 1 0 1.531l-2.295 5.54a2 2 0 0 1-1.082 1.083l-5.54 2.295a2 2 0 0 1-1.531 0l-5.54-2.295a2 2 0 0 1-1.083-1.082l-2.295-5.54a2 2 0 0 1 0-1.531l2.295-5.54a2 2 0 0 1 1.082-1.083z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Octagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Octagon;
