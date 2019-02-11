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
  extends: ["airbnb", "prettier"],
  rules: {
    "import/newline-after-import": 1,
    "import/order": [
      1,
      {
        groups: ["builtin", "external"],
        "newlines-between": "always"
      }
    ],
    "no-console": [1, { allow: ["assert"] }],
  },
};
