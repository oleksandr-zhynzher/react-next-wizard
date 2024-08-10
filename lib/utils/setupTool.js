const { writeToFile } = require("./file");
const { logInfo, logSuccess, logError } = require("./logger");
const { promptUser } = require("../prompts");
const { ignoreFilesConfig } = require("../config");
const { installPackages, addPackageScripts } = require("../package");

async function setupTool(config) {
  const {
    toolName,
    promptMessage,
    packages,
    configFileName,
    configContent,
    ignoreConfigFileName,
    scripts,
  } = config;

  try {
    // Prompt the user for confirmation
    if (promptMessage) {
      const useTool = await promptUser(promptMessage);

      if (!useTool) {
        return;
      }
    }

    logInfo(`Setting up ${toolName}...`);

    // Install required packages
    installPackages(packages);

    // Update configuration file
    if (configFileName && configContent) {
      writeToFile(configFileName, "", configContent);
    }

    // Update configuration file
    if (ignoreConfigFileName) {
      writeToFile(ignoreConfigFileName, "", ignoreFilesConfig.trim(""));
    }

    // Update package scripts
    if (scripts) {
      addPackageScripts(scripts);
    }

    logSuccess(`${toolName} setup complete!`);
    return true;
  } catch (error) {
    logError(`An error occurred during ${toolName} setup:`, error);
  }
}

module.exports = setupTool;
