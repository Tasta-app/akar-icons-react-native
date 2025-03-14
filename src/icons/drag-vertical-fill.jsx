import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const DragVerticalFill = ({
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
      <path fillRule="evenodd" d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd"></path><path fillRule="evenodd" d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd"></path><path fillRule="evenodd" d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd"></path><path fillRule="evenodd" d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd"></path><path fillRule="evenodd" d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd"></path><path fillRule="evenodd" d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

DragVerticalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DragVerticalFill;
