import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const TypescriptFill = ({
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
      <g clipPath="url(#a)"><path d="M23.429 0H.57A.57.57 0 0 0 0 .571V23.43c0 .315.255.571.571.571H23.43a.57.57 0 0 0 .571-.571V.57A.57.57 0 0 0 23.429 0m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978 1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751 0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652 0 4.95-6.788 2.755-6.788 2.755"></path></g><defs><clipPath id="a"><rect width="24" height="24"></rect></clipPath></defs>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

TypescriptFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TypescriptFill;
