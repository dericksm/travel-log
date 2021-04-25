module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "airbnb-base"
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  },
};
