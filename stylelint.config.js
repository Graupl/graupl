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
    "max-nesting-depth": 7,
    "selector-no-qualifying-type": null,
    "@stylistic/string-quotes": "double",
    "@stylistic/function-parentheses-space-inside": "never-single-line",
    "@stylistic/indentation": null,
    "@stylistic/block-opening-brace-space-before": "never-single-line",
    "scss/at-mixin-pattern": "^[-_]?[a-z][a-z0-9]*(-[a-z0-9]+)*$",
    "scss/dollar-variable-pattern": "^[-_]?[a-z][a-z0-9]*(-[a-z0-9]+)*$",
    "custom-property-pattern": "^[a-z][a-z0-9]*(-{1,2}[a-z0-9]+)*$",
  },
};

export default config;
