import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const Umbrella = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="M12 4c-4.915 0-8.91 3.378-8.999 8.817a.18.18 0 0 0 .182.183.19.19 0 0 0 .17-.11C3.876 11.767 4.782 11.5 6 11.5c1.185 0 1.964.227 2.456 1.302.054.12.172.198.304.198a.37.37 0 0 0 .326-.224C9.56 11.729 10.901 11.5 12 11.5M12 4c4.916 0 8.91 3.378 8.999 8.817a.18.18 0 0 1-.182.183.19.19 0 0 1-.17-.11c-.524-1.123-1.43-1.39-2.647-1.39-1.185 0-1.964.227-2.456 1.302a.34.34 0 0 1-.304.198.37.37 0 0 1-.326-.224C14.44 11.729 13.099 11.5 12 11.5M12 4V2m0 9.5V20a2 2 0 1 1-4 0"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Umbrella;
