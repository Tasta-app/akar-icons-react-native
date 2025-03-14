import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Ticket = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M8.707 3.293c-.39.39-.369 1.021-.138 1.523a2.83 2.83 0 0 1-3.753 3.753c-.502-.23-1.133-.252-1.523.138l-.586.586a1 1 0 0 0 0 1.414l10.586 10.586a1 1 0 0 0 1.414 0l.586-.586c.39-.39.369-1.021.138-1.523a2.83 2.83 0 0 1 3.753-3.753c.502.23 1.133.252 1.523-.138l.586-.586a1 1 0 0 0 0-1.414L10.707 2.707a1 1 0 0 0-1.414 0z"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Ticket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Ticket;
