const { promptProjectName, getProjectName } = require("./getProjectName");
const {
  promptPackageManager,
  getPackageManager,
} = require("./getPackageManager");
const {
  promptUseDefaultSettings,
  getIsUsingDefaultSettings,
} = require("./getUseDefaultSettings");

module.exports = {
  getProjectName,
  promptProjectName,
  getPackageManager,
  promptPackageManager,
  getIsUsingDefaultSettings,
  promptUseDefaultSettings,
};
