import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const AlignBottom = ({
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
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M21 22H3"></path><path d="M6 18V2h4v16z"></path><path d="M14 18V8h4v10z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

AlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AlignBottom;
