const presets = [["@babel/preset-env", {
  "targets": {
    "node": "10"
  }
}], '@babel/preset-typescript', '@babel/preset-react'];
const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = {
  plugins,
  presets,
};
