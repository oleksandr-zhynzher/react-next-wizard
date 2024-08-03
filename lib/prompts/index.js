const getProjectName = require("./getProjectName");
const getNextJsOptions = require("./getNextJsOptions");
const getPackageManager = require("./getPackageManager");
const promptGetCustomEslintSettings = require("./getCustomEslintSettings");
const promptGetEslintDefaultSettings = require("./getEslintDefaultSettings");

module.exports = {
  getProjectName,
  getNextJsOptions,
  getPackageManager,
  promptGetCustomEslintSettings,
  promptGetEslintDefaultSettings,
};
