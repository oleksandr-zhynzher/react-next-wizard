const { logSuccess } = require("../utils/logger");
const { readFile, writeToFile } = require("../utils/file");

function setupNodeVersion() {
  const packageJsonContent = readFile("package.json");
  const packageJson = JSON.parse(packageJsonContent);

  packageJson.engines = { node: getNodeVersion() };

  writeToFile("package.json", "", JSON.stringify(packageJson, null, 2));

  logSuccess(`Setup Node.js version: ${packageJson.engines.node}`);
}

function getNodeVersion() {
  return process.version;
}

module.exports = { setupNodeVersion, getNodeVersion };
