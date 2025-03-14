import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const MusicAlbumFill = ({
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
      <path fillRule="evenodd" d="M1 5c0-2.21 1.792-4 4.002-4h13.996C21.208 1 23 2.79 23 5v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm19 7a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clipRule="evenodd"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

MusicAlbumFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MusicAlbumFill;
