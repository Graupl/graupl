/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("postcss-discard-comments"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};

module.exports = config;
