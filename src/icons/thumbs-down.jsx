import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const ThumbsDown = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  // Convert otherProps to a string of attributes
  const otherPropsString = Object.entries(otherProps)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Construct the XML string
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  ${otherPropsString}>
      <path d="m12.395 18.218-.23 2.369c-.091.952-.98 1.598-1.878 1.366-1.351-.35-2.3-1.605-2.3-3.044v-3.035c0-.675 0-1.013-.146-1.26a1 1 0 0 0-.333-.345c-.24-.151-.567-.151-1.22-.151h-.396c-1.703 0-2.554 0-3.078-.39a2.07 2.07 0 0 1-.78-1.208c-.146-.65.181-1.463.836-3.087l.327-.81c.188-.468.265-.975.225-1.48-.232-2.874 2.047-5.295 4.833-5.135l10.424.598c1.139.065 1.708.098 2.222.553.515.455.612.924.805 1.861a14.3 14.3 0 0 1-.055 6.037c-.283 1.249-1.475 1.92-2.706 1.76-3.264-.42-6.223 2.019-6.55 5.4"></path><path d="m17 12.5.137-.457c.887-2.956.84-6.115-.137-9.043"></path>
      </svg>
    `;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};

ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ThumbsDown;
