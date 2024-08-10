const { readFile, writeToFile } = require("../utils/file");
const {
  huskyConfig,
  huskyLintStagedConfig,
} = require("../config/husky.config");

function addLintStagedToPackage() {
  const packageJsonContent = readFile("package.json");
  const packageJson = JSON.parse(packageJsonContent);

  packageJson["lint-staged"] = huskyLintStagedConfig;

  writeToFile("package.json", "", JSON.stringify(packageJson, null, 2));
}

function setupHooks() {
  const huskyFolder = ".husky";
  const huskyConfigFile = "pre-commit";

  writeToFile(huskyConfigFile, huskyFolder, huskyConfig);

  addLintStagedToPackage();
}

module.exports = { setupHooks };
