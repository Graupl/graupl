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
    "selector-no-qualifying-type": null,
  },
};

export default config;
