import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const VrAr = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3.868a2 2 0 0 1-1.715-.971l-1.56-2.6a1 1 0 0 0-1.714 0l-1.56 2.6A2 2 0 0 1 7.868 19H4a2 2 0 0 1-2-2z"></path><path d="M3.813 6.781A4 4 0 0 1 7.14 5h9.718a4 4 0 0 1 3.328 1.781L21 8H3z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

VrAr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VrAr;
