import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const PersonCheck = ({
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
      <circle cx="12" cy="7" r="5"></circle><path d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"></path><path d="m17 16.5 1.5 1.5 2.5-3"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

PersonCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PersonCheck;
