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
    "max-classes-per-file": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "prefer-const": "off",
    "no-trailing-spaces": "error",
    "prefer-destructuring": "off",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": [
      "error",
      "WithStatement",
      "BinaryExpression[operator='in']",
    ],
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
