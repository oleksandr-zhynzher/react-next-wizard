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
const { promptFramework } = require("./promptFramework");

module.exports = {
  promptUser,
  getProjectName,
  promptFramework,
  promptProjectName,
  getPackageManager,
  promptPackageManager,
  getIsUsingDefaultSettings,
  promptUseDefaultSettings,
};
