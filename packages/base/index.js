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
    "import/newline-after-import": 1, // enforce space after imports
    "import/order": [
      1,
      {
        groups: ["builtin", "external"],
        "newlines-between": "always"
      }
    ], // sort imports in groups, built-in first and external after, delimit with newline
    "no-console": [2, { allow: ["assert"] }], // avoid console, except asserts
  },
};
