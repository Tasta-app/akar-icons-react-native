import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const HtmlFill = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"  ${otherPropsString}>
      <g clipPath="url(#a)"><path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081z"></path><path d="M9.656 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656z"></path><path d="M12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058z"></path><path d="M16.346 0h1.083v2.167h1.52v1.07h-2.603z"></path><path fillRule="evenodd" d="M5.046 22.072 3 4.717h18L18.953 22.07 11.99 24zm4.137-9.5-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.332l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571z" clipRule="evenodd"></path></g><defs><clipPath id="a"><rect width="24" height="24"></rect></clipPath></defs>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

HtmlFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default HtmlFill;
