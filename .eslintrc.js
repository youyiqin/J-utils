module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": 0,
    "import/extensions": "off",
    "no-irregular-whitespace": ["error", { skipComments: true }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
        moduleDirectory: ["src", "node_modules", "test"],
      },
    },
  },
};
