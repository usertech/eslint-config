module.exports = {
  extends: ["@commitlint/config-conventional"],
  "type-enum": [
    2,
    "always",
    [
      "BREAKING CHANGE",
      "chore",
      "docs",
      "feat",
      "fix",
      "refactor",
      "revert",
      "test"
    ]
  ]
};
