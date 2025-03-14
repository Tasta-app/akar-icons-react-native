import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const PointerLeftFill = ({
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
      <path fillRule="evenodd" d="M6.6 4.2A3 3 0 0 1 9 3h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-2.4-1.2l-4.5-6a3 3 0 0 1 0-3.6z" clipRule="evenodd"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

PointerLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PointerLeftFill;
