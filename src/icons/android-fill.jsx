import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const AndroidFill = ({
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
      <path d="M17.532 15.106a1.003 1.003 0 1 1 .001-2.007 1.003 1.003 0 0 1 0 2.007m-11.044 0a1.003 1.003 0 1 1 .001-2.007 1.003 1.003 0 0 1 0 2.007m11.4-6.018 2.006-3.459a.413.413 0 1 0-.721-.407l-2.027 3.5a12.24 12.24 0 0 0-5.13-1.108c-1.85 0-3.595.398-5.141 1.098l-2.027-3.5a.413.413 0 1 0-.72.407l1.995 3.458C2.696 10.947.345 14.417 0 18.523h24c-.334-4.096-2.675-7.565-6.112-9.435"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

AndroidFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AndroidFill;
