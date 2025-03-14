import React from 'react';
import PropTypes from 'prop-types';

const SoundcloudFill = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M1.16 16.466c.049 0 .09-.039.098-.093l.27-2.022-.27-2.069c-.007-.054-.05-.093-.099-.093-.05 0-.094.04-.1.093l-.236 2.069.236 2.021c.006.055.05.094.1.094"></path>
      <path d="M.272 15.697c.048 0 .088-.036.095-.09l.209-1.256-.209-1.28c-.007-.053-.047-.09-.095-.09-.051 0-.09.037-.098.09L0 14.351l.174 1.256c.008.053.047.09.098.09"></path>
      <path d="M2.22 11.897a.12.12 0 0 0-.12-.114.12.12 0 0 0-.119.114l-.224 2.454.224 2.364a.12.12 0 0 0 .12.112.12.12 0 0 0 .12-.113l.254-2.363z"></path>
      <path d="M3.052 16.923a.143.143 0 0 0 .14-.133l.241-2.439-.24-2.522a.143.143 0 0 0-.141-.132.14.14 0 0 0-.14.133l-.213 2.521.212 2.439a.14.14 0 0 0 .141.133"></path>
      <path d="M4.01 16.962a.16.16 0 0 0 .162-.152l.226-2.459-.226-2.34a.16.16 0 0 0-.162-.151.16.16 0 0 0-.16.152l-.2 2.34.2 2.458a.16.16 0 0 0 .16.152"></path>
      <path d="m5.37 14.352-.212-3.805a.184.184 0 0 0-.182-.173.183.183 0 0 0-.182.173l-.188 3.805.188 2.458a.183.183 0 0 0 .364 0z"></path>
      <path d="M5.951 16.987a.2.2 0 0 0 .201-.192v.002l.199-2.444-.199-4.676a.203.203 0 0 0-.405 0l-.174 4.676.175 2.443a.2.2 0 0 0 .203.19"></path>
      <path d="M6.931 9.076a.22.22 0 0 0-.223.212l-.162 5.065.162 2.418a.22.22 0 0 0 .223.211.22.22 0 0 0 .223-.211l.185-2.418-.185-5.065a.22.22 0 0 0-.223-.212"></path>
      <path d="M7.92 16.987a.24.24 0 0 0 .244-.232v.002l.17-2.404-.17-5.235a.24.24 0 0 0-.243-.232.24.24 0 0 0-.243.232l-.153 5.235.153 2.404c.002.129.11.23.243.23"></path>
      <path d="M8.918 16.985a.26.26 0 0 0 .263-.252v.002l.157-2.381-.157-5.103a.26.26 0 0 0-.263-.25.26.26 0 0 0-.264.25l-.138 5.103.139 2.38c.003.14.119.25.263.25"></path>
      <path d="m10.349 14.354-.142-4.917a.28.28 0 0 0-.284-.27.28.28 0 0 0-.285.271l-.127 4.916.127 2.366a.28.28 0 0 0 .285.27.28.28 0 0 0 .284-.273v.003z"></path>
      <path d="M10.935 16.994c.165 0 .301-.13.304-.29l.129-2.349-.129-5.85a.3.3 0 0 0-.304-.291.303.303 0 0 0-.305.291l-.115 5.848.115 2.352c.003.158.14.289.305.289"></path>
      <path d="M11.944 7.664a.32.32 0 0 0-.327.31l-.133 6.382.134 2.315a.32.32 0 0 0 .325.308.32.32 0 0 0 .324-.311v.003l.146-2.315-.146-6.381a.32.32 0 0 0-.323-.311"></path>
      <path d="m12.866 16.996 8.182.004C22.678 17 24 15.732 24 14.167c0-1.564-1.322-2.832-2.953-2.832-.404 0-.79.079-1.142.22C19.673 9.003 17.44 7 14.718 7c-.665 0-1.314.126-1.887.339-.223.083-.283.168-.285.333v8.989a.35.35 0 0 0 .32.335"></path>
    </svg>
  );
};

SoundcloudFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SoundcloudFill;
