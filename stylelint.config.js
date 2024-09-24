const config = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "scss/comment-no-empty": null,
    "selector-max-compound-selectors": 4,
    "max-nesting-depth": 4,
    "selector-no-qualifying-type": null,
    "@stylistic/string-quotes": "double",
    "@stylistic/function-parentheses-space-inside": "never-single-line",
    "@stylistic/indentation": null,
    "@stylistic/block-opening-brace-space-before": "never-single-line",
  },
};

export default config;
