// @typescript-eslint
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

// rules severity codes
// 0 - off
// 1 - warning
// 2 - error

module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: ["@usertech/base"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/camelcase": 1,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 1,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-triple-slash-reference": 1,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/prefer-interface": 0, // we want `type`
    "import/newline-after-import": 1,
    "import/no-unresolved": 1, // fail on importing .ts into .js
    "import/order": [
      1,
      {
        groups: ["builtin", "external"],
        "newlines-between": "always"
      }
    ],
    "no-console": [1, { allow: ["assert"] }],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/prop-types": 0 // with TS this warn is irrelevant
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      }
    }
  }
};
