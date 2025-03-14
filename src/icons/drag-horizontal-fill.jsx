import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const DragHorizontalFill = ({
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
      <path fillRule="evenodd" d="M22 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"></path><path fillRule="evenodd" d="M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"></path><path fillRule="evenodd" d="M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"></path><path fillRule="evenodd" d="M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"></path><path fillRule="evenodd" d="M6 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"></path><path fillRule="evenodd" d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

DragHorizontalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DragHorizontalFill;
