### U+ ESLint config
> A shareable ESLint configuration file

## Installation

1.  install ESLint and dependencies

    `yarn add --dev eslint@5 @usertech/eslint-config-base`

1.  Create/Modify `.eslintrc.js` file in root of your project and paste following snippet inside

```js
module.exports = {
  "extends": ["@usertech/eslint-config-base"]
}
```

## IDE Support

Most IDE's has support for eslint, which will highlight linting errors in sourcecode.

* [setting ESLint in VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [setting ESLint in WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html)

## TypeScript

For linting TypeScript use _@usertech/eslint-config-typescript_.

## Notice

* Config is opinionated to some extent, settings might look odd. The rules are configured based on

  1.  experience with preventing serious errors/bugs/problems during source code development/program execution
  2.  usage of this preset on several production projects
  3.  best-practices and common gotchas of the language, runtime and ecosystem.

> Although, everyone can be wrong or have different opinion, so don't hesitate to challenge the status quo!
