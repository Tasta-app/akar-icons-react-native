import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Dice6 = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 8h.5"></path><path d="M8.25 7.75v.5"></path><path d="M8.25 11.75v.5"></path><path d="M8.25 15.75v.5"></path><path d="M15.5 8h.5"></path><path d="M15.75 7.75v.5"></path><path d="M15.75 11.75v.5"></path><path d="M15.75 15.75v.5"></path><path d="M8 12h.5"></path><path d="M15.5 12h.5"></path><path d="M8 16h.5"></path><path d="M15.5 16h.5"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Dice6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dice6;
