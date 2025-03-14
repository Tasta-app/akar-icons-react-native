import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const SpotifyFill = ({
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
      <g clipPath="url(#a)"><path d="M11.995 0C5.381 0 0 5.382 0 11.996 0 18.616 5.381 24 11.995 24 18.615 24 24 18.615 24 11.996 24 5.382 18.615 0 11.995 0M5.908 16.404a14.6 14.6 0 0 1 4.238-.638c2.414 0 4.797.612 6.892 1.77.125.068.238.292.29.572.05.28.03.567-.052.716a.61.61 0 0 1-.834.24A13.1 13.1 0 0 0 6.277 18.03a.61.61 0 0 1-.771-.402c-.107-.35.114-1.13.402-1.224m-.523-4.42a18.2 18.2 0 0 1 4.76-.635c2.894 0 5.767.7 8.31 2.026.179.09.31.244.37.432a.75.75 0 0 1-.052.578c-.227.444-.493.743-.66.743a.8.8 0 0 1-.35-.086 16.3 16.3 0 0 0-7.617-1.854 16.3 16.3 0 0 0-4.366.585.749.749 0 0 1-.92-.525c-.112-.422.145-1.16.525-1.264M5.25 9.098a.88.88 0 0 1-1.073-.641c-.123-.498.188-1.076.64-1.19a22.4 22.4 0 0 1 5.328-.649c3.45 0 6.756.776 9.824 2.307a.888.888 0 0 1 .4 1.19c-.143.288-.453.598-.795.598a.9.9 0 0 1-.388-.087 20 20 0 0 0-9.041-2.126c-1.635 0-3.282.201-4.895.598"></path></g><defs><clipPath id="a"><rect width="24" height="24"></rect></clipPath></defs>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

SpotifyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SpotifyFill;
