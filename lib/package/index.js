const setupNodeVersion = require("./setupNodeVersion");
const setupPackageManager = require("./setupPackageManager");
const addPackageScripts = require("./addPackageScripts");
const setupResolutions = require("./setupResolutions");
const installPackages = require("./installPackages");

module.exports = {
  setupNodeVersion,
  setupPackageManager,
  addPackageScripts,
  setupResolutions,
  installPackages,
};
