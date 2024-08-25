const setupTool = require("./setupTool");
const addGitignoreRule = require("./addGitignoreRule");
const generateCreateCommand = require("./generateCreateCommand");
const { writeToFile, readFile } = require("./file");
const { logInfo, logSuccess, logError } = require("./logger");
const { setupYarn } = require("./setupYarn");
const { validateApp } = require("./validateApp");
const { setupAppPreview } = require("./setupAppPreview");
const { setupWorkingDirectory } = require("./path");
const { reportSuccessfulSetup } = require("./reportSuccessfulSetup");

module.exports = {
  setupTool,
  addGitignoreRule,
  generateCreateCommand,
  writeToFile,
  readFile,
  logInfo,
  logSuccess,
  logError,
  setupYarn,
  validateApp,
  setupAppPreview,
  setupWorkingDirectory,
  reportSuccessfulSetup,
  validateApp,
};
