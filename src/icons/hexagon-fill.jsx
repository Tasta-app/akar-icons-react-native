import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const HexagonFill = ({
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
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"  ${otherPropsString}>
      <path d="M11.036 1.53a2 2 0 0 1 1.928 0l8 4.4A2 2 0 0 1 22 7.683v8.635a2 2 0 0 1-1.036 1.752l-8 4.4a2 2 0 0 1-1.928 0l-8-4.4A2 2 0 0 1 2 16.317V7.683A2 2 0 0 1 3.036 5.93z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

HexagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default HexagonFill;
