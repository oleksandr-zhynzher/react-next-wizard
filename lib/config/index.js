const ignoreFilesConfig = require('./ignore.config');
const eslintPluginsConfig = require('./eslint.config');
const prettierConfig = require('./prettier.config');
const madgeConfig = require('./madge.config');
const depcheckConfig = require('./depcheck.config');
const bundleAnalyzerConfig = require('./bundleAnalyzer.config');
const yarnConfig = require('./yarn.config');
const storyBookJestAddonConfig = require('./storybook.config');
const jestConfig = require('./jest.config');

module.exports = {
  ignoreFilesConfig,
  eslintPluginsConfig,
  prettierConfig,
  madgeConfig,
  depcheckConfig,
  bundleAnalyzerConfig,
  yarnConfig,
  jestConfig,
  storyBookJestAddonConfig,
};
