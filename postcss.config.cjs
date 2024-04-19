/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("autoprefixer"),
    // @todo: add cssnano when ready
    // Waiting on upstream issue for postcss-calc: https://github.com/postcss/postcss-calc/issues/77
    require("cssnano"),
    require("postcss-discard-comments"),
  ],
};

module.exports = config;
