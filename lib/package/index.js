const setupNodeVersion = require("./setupNodeVersion");
const { setupPackageManager } = require("./setupPackageManager");
const addPackageScripts = require("./addPackageScripts");
const setupResolutions = require("./setupResolutions");
const installPackages = require("./installPackages");
const runCommand = require("./runCommand");

module.exports = {
  setupNodeVersion,
  setupPackageManager,
  addPackageScripts,
  setupResolutions,
  installPackages,
  runCommand,
};
