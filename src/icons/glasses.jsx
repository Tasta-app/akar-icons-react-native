import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Glasses = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <circle cx="6" cy="14" r="4"></circle><circle cx="18" cy="14" r="4"></circle><path d="m10 14 .211-.106a4 4 0 0 1 3.578 0L14 14"></path><path d="m19 6 2.838 6.623a2 2 0 0 1 .162.788V14"></path><path d="m5 6-2.838 6.623A2 2 0 0 0 2 13.41V14"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Glasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Glasses;
