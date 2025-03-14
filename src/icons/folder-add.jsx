import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const FolderAdd = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M22 19V9a2 2 0 0 0-2-2h-6.764a2 2 0 0 1-1.789-1.106l-.894-1.788A2 2 0 0 0 8.763 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"></path><path d="M12 11v3m0 0v3m0-3h3m-3 0H9"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

FolderAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FolderAdd;
