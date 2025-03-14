const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
  };
  const fillAttrs = {
    fill: 'color',
    otherProps: '...otherProps',
  };
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    otherProps: '...otherProps',
  };
  return Object.assign(
    {},
    baseAttrs,
    style === 'fill' ? fillAttrs : strokeAttrs
  );
};

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { SvgXml } from 'react-native-svg';

  const ${ComponentName} = ({ color = 'currentColor', size = '24', ...otherProps }) => {
    // Convert otherProps to a string of attributes
    const otherPropsString = Object.entries(otherProps)
      .map(([key, value]) => \`\${key}="\${value}"\`)
      .join( ' ');

    // Construct the XML string
    const xml = \`
      <svg ${attrs} \${otherPropsString}>
      ${svgCode}
      </svg>
    \`;

    return <SvgXml xml={xml} width='100%' height='100%' />; };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  export default ${ComponentName}
`;

module.exports = { getAttrs, getElementCode };
