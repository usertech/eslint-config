### U+ ESLint config

monorepo for eslint config, currently contains two configs

```
packages/
├── base       # config for plain JavaScript
└── typescript # config for TypeScript project
```

## Development

This project uses [conventional commits](www.conventionalcommits.org/) enforced via [commitlint](https://github.com/conventional-changelog/commitlint).

Commit messages must start like this

```text
type: message
# or
type(scope): message
```

where `type` can be one of
* `chore` - change not affecting function e.g. reformat, or removing of unused code or change of publishing logic,
* `docs` - change of documentation, eg. change of README.md,
* `feat` - change introducing new feature, eg. new eslint plugin for enforcing new rules,
* `fix` - change patching a bug in codebase,
* `refactor` - change not changing function but improving code structure,
* `revert` - self explanatory,
* `test` - adding new tests,
* `BREAKING CHANGE` - special type for change that will break backward compatibility, eg. using config that will break previous version of ESLint.

optional `scope` may be provided to further describe field of change, eq `typescript` for change only affecting typescript config

Thanks to this convention, we are able to generate CHANGELOG and maintain semantic versioning.

