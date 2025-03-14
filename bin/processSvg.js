const { optimize: optimizeSvgo } = require('svgo');
const cheerio = require('cheerio');

/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
async function optimize(svg) {
  return new Promise((resolve) =>
    resolve(
      optimizeSvgo(svg, {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                convertShapeToPath: false,
                mergePaths: false,
                removeTitle: true,
              },
            },
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|stroke.*)',
            },
          },
        ],
      }).data
    )
  );
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg) {
  const optimized = await optimize(svg)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then((svg) => svg.replace(/;/g, ''))
    .then(removeSVGElement)
    .then((svg) =>
      svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`)
    );
  return optimized;
}

module.exports = processSvg;
