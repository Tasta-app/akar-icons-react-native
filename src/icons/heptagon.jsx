import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Heptagon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M11.114 2.438a2 2 0 0 1 1.772 0l6.275 3.1a2 2 0 0 1 1.066 1.358l1.569 7.047a2 2 0 0 1-.374 1.662l-4.371 5.623a2 2 0 0 1-1.579.772H8.528a2 2 0 0 1-1.579-.772l-4.371-5.623a2 2 0 0 1-.374-1.662l1.569-7.047a2 2 0 0 1 1.066-1.359z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Heptagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Heptagon;
