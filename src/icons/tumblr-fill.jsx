import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const TumblrFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"  ${otherPropsString}>
      <g clipPath="url(#a)"><path d="M18.895 22.517c-.798.867-2.646 1.456-4.301 1.483h-.182c-5.557 0-6.766-4.164-6.766-6.594v-6.748H5.458a.45.45 0 0 1-.324-.137.47.47 0 0 1-.134-.33V7.003c0-.164.05-.324.142-.458a.8.8 0 0 1 .376-.29c2.855-1.026 3.748-3.562 3.87-5.49.035-.516.297-.765.738-.765H13.4a.45.45 0 0 1 .33.134.47.47 0 0 1 .137.333V5.87h3.823c.121 0 .238.05.324.137a.47.47 0 0 1 .134.33v3.83a.47.47 0 0 1-.134.33.45.45 0 0 1-.324.138h-3.84v6.245c0 1.568 1.015 2.001 1.64 2.001a4.5 4.5 0 0 0 1.488-.321.97.97 0 0 1 .595-.106.48.48 0 0 1 .34.37l1.012 3.014c.068.237.14.498-.03.68"></path></g><defs><clipPath id="a"><rect width="24" height="24"></rect></clipPath></defs>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

TumblrFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TumblrFill;
