### U+ ESLint config base

> A shareable ESLint configuration file

## TypeScript

For linting TypeScript project use [_@usertech/eslint-config-typescript_](https://www.npmjs.com/package/@usertech/eslint-config-typescript).

## Installation

1.  install ESLint and dependencies

    `yarn add --dev eslint@5 @usertech/eslint-config-base`

1.  create/modify `.eslintrc.js` file in root of your project and paste following snippet inside

    ```js
    // .eslintrc.js
    module.exports = {
      extends: ["@usertech/eslint-config-base"]
    };
    ```

## IDE support

Most IDE's has support for eslint, which will highlight linting errors in sourcecode. It is strongly recommended to use these extensions since it improves your workflow signifficantly.

- [setting ESLint in VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [setting ESLint in WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html)

## Setup QA in project

After installation, follow these steps to unleash the full power of ESLint.

1. Run all of these steps in separated GIT branch.

1. Create `.eslintignore` file in root of your project. It works similarly to `.gitignore`, all listed paths will be ignored by eslint CLI or IDE extensions, but beware that the syntax is different from `.gitignore`. All line must be a glob relative to `.eslintignore`. Please, read the [.eslintignore documentation](https://eslint.org/docs/user-guide/configuring#eslintignore).

   Your `.eslintignore` might look like this

   ```
   # ignore node_modules directory anywhere
   **/node_modules/*
   # ignore build directory next to .eslintignore
   build/*
   ```

1. Create `lint` script in _package.json_ like this

   ```json
   // package.json
   {
     "scripts": {
       "lint": "eslint --ext .js,.jsx ."
     }
   }
   ```

   **Note:** ESLint by default checks only _.js_ file extensions, so we use [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#--ext) option to check also _.jsx_ and we check all files from root directory with period `.`, excluding only files marked in `.eslintignore`.

1. Run `yarn lint` in terminal and check reported errors and warnings. If it contains files that you dont wish to check, eg. generated code, improve your `.eslintignore`. Once you are happy with your `.eslintignore` setup, commit your changes.

1. Some errors could be fixed automatically by ESLint and it will be reported in ESLint output. Run `yarn lint --fix` to perform this automatic fixes and then check `git diff` of made changes. If everything is OK, commit changes.

1. Manually resolve errors that cannot be automatically fixed. Run `yarn lint --quiet` to report errors only and then fix errors or [disable rules with inline comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments).

1. You may also suppress some rules in `.eslintconfig.js`, but think twice before you doso. If you thing some rule does not makes sense, eg. decreases code clean and readability, please, open discussion in Github issue tracker.

1. If you encounter some difficulties, dont hesitate to open ticket on Github issue tracker. ESlint may be hard to setup in monorepo scenarios or if you are using non standard module resolution schema.

1. As you correct all errors, commit your changes. Congratulation, you have now 100% fixed project. You should also fix all warning, but it is not that much importatnt, so we can continue to next step.

1. To keep your project in a good shape, install [lint-staged](https://github.com/okonet/lint-staged) and set it to lint all files before git commit. Lint-staged is smart, it will only check files that was changed since last commit, so it will be pretty fast.

   Set lint-staged it in _package.json_ like this

   ```json
   // package.json
   {
     "husky": {
       "hooks": {
         "pre-commit": "lint-staged"
       }
     },
     "lint-staged": {
       "**/*.j{s,sx}": ["eslint --fix --quiet"]
     }
   }
   ```

   Now eslint will run prior to commit on all files in GIT staging area with _.js_ or _.jsx_ extension and in case of any linting errors, it will print the errors and prevent the commit to finish. All team members must fix or explicitly suppress linting errors to commit their work and suppressed errors are easy to spot during code review.

1. You may sometimes need to quickly commit changes with errors, eg. because you need to switch into another branch. For this scenario, you can run git commit with `--no-verify` flag tu skip linting. This is why you should run eslint also as part of continuous integration (CI) tests, because some people may misuse the `--no-verify` flag. Please, setup CI to run `yarn lint` as one of initial steps.

1. You should also install and use prettier to enforce same formating rules and to overcome bloated GIT history by changed formatting of code. Check [pretty-quick](https://github.com/azz/pretty-quick) library, which is like `lint-staged` for formatting code.

   With pretty-quick your _package.json_ will look like this

   ```json
   // package.json
   {
     "husky": {
       "hooks": {
         "pre-commit": "lint-staged && pretty-quick --staged"
       }
     },
     "lint-staged": {
       "**/*.j{s,sx}": ["eslint --fix --quiet"]
     }
   }
   ```
