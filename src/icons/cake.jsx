import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Cake = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M3 13a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="m3 13 2.914 2.331c1.187.95 2.9.855 3.975-.22v0a2.985 2.985 0 0 1 4.222 0v0a2.985 2.985 0 0 0 3.975.22L21 13"></path><path d="M12 6a2 2 0 0 1-2-2c0-.876.677-1.576 1.273-2.217L12 1l.727.783C13.323 2.424 14 3.124 14 4a2 2 0 0 1-2 2"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Cake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cake;
