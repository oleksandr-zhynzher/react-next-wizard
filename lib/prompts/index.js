const getProjectName = require("./getProjectName");
const getPackageManager = require("./getPackageManager");
const {
  promptUseDefaultSettings,
  isUsingDefaultSettings,
} = require("./getUseDefaultSettings");

module.exports = {
  getProjectName,
  getPackageManager,
  promptUseDefaultSettings,
  isUsingDefaultSettings,
};
