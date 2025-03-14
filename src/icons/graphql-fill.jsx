import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const GraphqlFill = ({
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
      <g clipPath="url(#a)"><path fillRule="evenodd" d="M11.384 4.187a2.13 2.13 0 0 0 1.171.018l6.326 11.182a2.13 2.13 0 0 0-.593 1.038H5.71a2.15 2.15 0 0 0-.64-1.079zm-.921-.565q.028.03.057.058L4.193 14.865l-.09-.022V9.156A2.12 2.12 0 0 0 5.481 8.14a2.14 2.14 0 0 0 .19-1.694zm3.57-.835q.099-.308.1-.648a2.134 2.134 0 1 0-4.178.607L5.158 5.574A2.131 2.131 0 0 0 1.785 6a2.146 2.146 0 0 0 1.322 3.143v5.715q-.276.07-.535.219A2.147 2.147 0 0 0 1.791 18a2.13 2.13 0 0 0 3.368.43l4.795 2.826a2.2 2.2 0 0 0-.086.605C9.868 23.044 10.82 24 12 24a2.138 2.138 0 0 0 2.012-2.848l4.751-2.8a2.128 2.128 0 0 0 3.44-.352 2.138 2.138 0 0 0-1.384-3.159v-5.68A2.147 2.147 0 0 0 22.215 6a2.133 2.133 0 0 0-3.401-.398zm-.599.937.075-.072 4.808 2.833a2.14 2.14 0 0 0 .203 1.654 2.12 2.12 0 0 0 1.303 1v5.72l-.078.023zm4.895 13.858-4.774 2.814a2.12 2.12 0 0 0-1.554-.674c-.606 0-1.152.252-1.54.658l-4.785-2.82q.018-.058.032-.118H18.29q.018.07.04.14" clipRule="evenodd"></path></g><defs><clipPath id="a"><rect width="24" height="24"></rect></clipPath></defs>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

GraphqlFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GraphqlFill;
