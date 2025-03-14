import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Lifesaver = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <g clipPath="url(#a)"><circle cx="12" cy="12" r="10" transform="rotate(45 12 12)"></circle><circle cx="12" cy="12" r="4" transform="rotate(45 12 12)"></circle><path d="m19.071 4.929-4.243 4.243"></path><path d="m9.172 14.828-4.243 4.243"></path><path d="m19.071 19.071-4.243-4.243"></path><path d="M9.172 9.172 4.929 4.929"></path></g><defs><clipPath id="a"><rect width="24" height="24"></rect></clipPath></defs>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Lifesaver.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Lifesaver;
