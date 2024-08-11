const { setupNodeVersion, getNodeVersion } = require("./setupNodeVersion");
const {
  setupPackageManager,
  getPackageManagerVersion,
} = require("./setupPackageManager");
const addPackageScripts = require("./addPackageScripts");
const setupResolutions = require("./setupResolutions");
const installPackages = require("./installPackages");
const runCommand = require("./runCommand");

module.exports = {
  setupNodeVersion,
  getNodeVersion,
  setupPackageManager,
  getPackageManagerVersion,
  addPackageScripts,
  setupResolutions,
  installPackages,
  runCommand,
};
