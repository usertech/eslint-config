### U+ ESLint config
> A shareable ESLint configuration file

## Installation

1.  install ESLint and dependencies

    `yarn add --dev eslint@5 @usertech/eslint-config`

1.  Create/Modify `.eslintrc.js` file in root of your project and paste following snippet inside

```js
module.exports = {
  "extends": ["@usertech/eslint-config"]
}
```

## IDE Support

Most IDE's has support for eslint, which will highlight linting errors in sourcecode.

* [setting ESLint in VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [setting ESLint in WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html)

## ESLint vs TSLint

This config is fully capable of linting TypeScript files. You may drop TSLint in your project since [TypeScript team now officially supports ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint).

## Notice

* Config is opinionated to some extent, settings might look odd. The rules are configured based on

  1.  experience with preventing serious errors/bugs/problems during source code development/program execution
  2.  usage of this preset on several production projects
  3.  best-practices and common gotchas of the language, runtime and ecosystem.

  > Although, everyone can be wrong or have different opinion, so don't hesitate to challenge the status quo!

* Config contains rules for ES5, ES2015+ and plugins like [react](https://github.com/yannickcr/eslint-plugin-react) and [import](https://github.com/benmosher/eslint-plugin-import)

* Config does not includes prettier - [see official docs how to integrate with ESLint](https://prettier.io/docs/en/eslint.html)

* TODO: add support for [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

## Developments

We use https://conventionalcommits.org for commit messages.
