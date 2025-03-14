import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const SquareFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"  ${otherPropsString}>
      <rect width="20" height="20" x="2" y="2" rx="2"></rect>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

SquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SquareFill;
