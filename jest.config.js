module.exports = {
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/packages/typescript/__tests__/*.[jt]{s,sx}"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects"
  ]
};
