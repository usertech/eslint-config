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
    "arrow-body-style": 0, // arrow functions are harder to debug, do not enforce them
    "import/newline-after-import": 1, // enforce space after imports
    "import/order": [
      1,
      {
        groups: ["builtin", "external"],
        "newlines-between": "always"
      }
    ], // sort imports in groups, built-in first and external after, delimit with newline
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: [] // unsetting the default 'Link' since it could render <button>
      }
    ],
    "jsx-a11y/label-has-for": 0, // deprecated
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelAttributes: ["label"],
        depth: 3
      }
    ],
    "no-console": [2, { allow: ["assert"] }], // avoid console, except asserts
    "react/destructuring-assignment": 0, // do not force to destructure props
    "react/forbid-prop-types": 0, // _some_ prop-type is better than _none_
    "react/jsx-indent": 0, // handled by prettier
    "react/jsx-indent-props": 0, // handled by prettier
    "react/jsx-wrap-multilines": 0, // handled by prettier
  }
};
