import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const ChatEdit = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M14 19c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07"></path><path d="M15.207 6.793a1 1 0 0 0-1.418.003l-4.55 4.597a2 2 0 0 0-.54 1.015l-.18.896a1 1 0 0 0 1.177 1.177l.896-.18a2 2 0 0 0 1.015-.54l4.597-4.55a1 1 0 0 0 .003-1.418z"></path><path d="m12.5 9.5 1 1"></path><path d="M14 19c-1.236 0-2.598.5-3.841 1.145-1.998 1.037-2.997 1.556-3.489 1.225s-.399-1.355-.212-3.404L6.5 17.5"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

ChatEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChatEdit;
