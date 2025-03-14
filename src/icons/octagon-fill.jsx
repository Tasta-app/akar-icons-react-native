import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const OctagonFill = ({
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
      <path d="M11.235 1.317a2 2 0 0 1 1.53 0l6.248 2.588a2 2 0 0 1 1.082 1.082l2.588 6.248a2 2 0 0 1 0 1.53l-2.588 6.248a2 2 0 0 1-1.082 1.082l-6.248 2.588a2 2 0 0 1-1.53 0l-6.248-2.588a2 2 0 0 1-1.082-1.082l-2.588-6.248a2 2 0 0 1 0-1.53l2.588-6.248a2 2 0 0 1 1.082-1.082z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

OctagonFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default OctagonFill;
