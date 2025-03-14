import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const PointerUpFill = ({
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
      <path fillRule="evenodd" d="M20.05 6.35a3 3 0 0 1 1.2 2.4v11a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-11a3 3 0 0 1 1.2-2.4l6-4.5a3 3 0 0 1 3.6 0z" clipRule="evenodd"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

PointerUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PointerUpFill;
