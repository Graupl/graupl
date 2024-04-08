const config = {
  "*.{js,cjs}": ["eslint --fix", "prettier --write"],
  "*.{scss,sass}": ["stylelint --fix", "prettier --write"],
};

export default config;
