// rules severity codes
// 0 - off
// 1 - warning
// 2 - error

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'arrow-body-style': 0, // arrow functions are harder to debug, do not enforce them
    camelcase: [2, { ignoreDestructuring: true, properties: 'never' }], // simplify dealing with backend payloads
    'import/newline-after-import': 1, // enforce space after imports
    'import/order': [
      1,
      {
        groups: ['builtin', 'external'],
        'newlines-between': 'always',
      },
    ], // sort imports in groups, built-in first and external after, delimit with newline
    'import/prefer-default-export': 0, // disputable outcome, many false errors
    'jsx-a11y/label-has-for': 0, // deprecated, replaced by `jsx-a11y/label-has-associated-control`
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        depth: 3,
      },
    ],
    'no-console': [2, { allow: ['assert'] }], // avoid console, except asserts
    'no-unused-expressions': [2, { allowShortCircuit: true }], // we prefer functional code (expressions in front of statements)
    'react/destructuring-assignment': 0, // do not force to destructure props
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }], // we discourage `.jsx` extension
    'react/forbid-prop-types': 0, // _some_ prop-type is better than _none_
    'react/jsx-indent': 0, // handled by prettier
    'react/jsx-indent-props': 0, // handled by prettier
    'react/jsx-wrap-multilines': 0, // handled by prettier
  },
}
