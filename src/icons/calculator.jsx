import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Calculator = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5H2z"></path><path d="M18.5 16.5h-3"></path><path d="M12 11h10v7a4 4 0 0 1-4 4h-6z"></path><path d="M12 11H2v7a4 4 0 0 0 4 4h6z"></path><path d="M5.5 18 7 16.5m0 0L8.5 15M7 16.5 8.5 18M7 16.5 5.5 15"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Calculator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Calculator;
