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
  overrides: [
    {
      files: ["*.t{s,sx}"],
      rules: {
        "import/named": 0, // fails to resolve import of types, handled by tsc
        "import/no-unresolved": 0 // fails to resolve import of types from @types dependencies, handled by tsc
      }
    }
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": 0, // prevent OOP conventions in code
    "@typescript-eslint/indent": 0, // handled by prettier
    "@typescript-eslint/no-explicit-any": 1, // allow use explicit any
    "@typescript-eslint/no-non-null-assertion": 1, //  allow use `object.!possiblyNull` syntax
    "@typescript-eslint/no-var-requires": 0, // allow use require() in webpack
    "@typescript-eslint/no-unused-vars": [2, { argsIgnorePattern: "^_$" }], // allow use underscore as empty arg for arrow functions
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] }
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
