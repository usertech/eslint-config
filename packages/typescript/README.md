### U+ ESLint config TypeScript
> A shareable ESLint configuration file

## Installation

1.  install ESLint and dependencies

    `yarn add --dev eslint@5 @usertech/eslint-config-typescript`

1.  Create/Modify `.eslintrc.js` file in root of your project and paste following snippet inside

    ```js
    module.exports = {
      "extends": ["@usertech/eslint-config-typescript"]
    }
    ```
1. ESLint by default checks only _.js_ file extensions, not _.ts_ and _.tsx_, nor even _.jsx_ extensions. Always run ESlint wint [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#--ext) option listing extension you want check in your project, eg.:

    ```
    eslint --ext .js,.jsx,.ts,.tsx src/
    ```
    
    

## IDE Support

Most IDE's has support for eslint, which will highlight linting errors in sourcecode.

* [setting ESLint in VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [setting ESLint in WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html)

**NOTE:** WebStorm currently not use ESLint for TypeScript files. To fix this, you must set typescript extensions in registry, as advised in [this forum post](https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000225170-ESLint-and-ts-Typescript-files?page=1#community_comment_360000332879).

## ESLint vs TSLint

This config is fully capable of linting TypeScript files. You may drop TSLint in your project since [TypeScript team now officially supports ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint).

## Notice

* Config is opinionated to some extent, settings might look odd. The rules are configured based on

  1.  experience with preventing serious errors/bugs/problems during source code development/program execution
  2.  usage of this preset on several production projects
  3.  best-practices and common gotchas of the language, runtime and ecosystem.

> Although, everyone can be wrong or have different opinion, so don't hesitate to challenge the status quo!
