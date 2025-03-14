import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const BookClose = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M4 4.222v15.556C4 21.005 5.023 22 6.286 22h11.428C18.977 22 20 21.005 20 19.778V8.444a2 2 0 0 0-2-2H6.286C5.023 6.444 4 5.45 4 4.222m0 0C4 2.995 5.023 2 6.286 2h9.143c1.262 0 2.285.995 2.285 2.222v2.222"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

BookClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BookClose;
