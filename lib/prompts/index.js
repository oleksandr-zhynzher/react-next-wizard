const { promptProjectName, getProjectName } = require("./promptProjectName");
const {
  promptPackageManager,
  getPackageManager,
} = require("./promptPackageManager");
const {
  promptUseDefaultSettings,
  getIsUsingDefaultSettings,
} = require("./promptUseDefaultSettings");
const { promptUser } = require("./promptUser");

module.exports = {
  promptUser,
  getProjectName,
  promptProjectName,
  getPackageManager,
  promptPackageManager,
  getIsUsingDefaultSettings,
  promptUseDefaultSettings,
};
