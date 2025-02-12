/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("postcss-discard-comments"),
    // require("./combine-at-rules.cjs")({ atRules: ["layer"] }),
    require("autoprefixer"),
    require("cssnano"),
  ],
};

module.exports = config;
