const globalConfig = require("../../postcss.config.cjs");

/** @type {import('postcss-load-config').Config} */
const config = {
  ...globalConfig,
};

module.exports = config;
