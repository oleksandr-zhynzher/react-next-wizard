const { execSync } = require("child_process");

const { writeToFile } = require("./file");
const { setupEslintForTool } = require("../tools/eslint/setupEslintForTool");
const { logInfo, logSuccess, logError } = require("./logger");
const generateCreateCommand = require("./generateCreateCommand");

const { promptUser } = require("../prompts");
const { ignoreFilesConfig } = require("../config");
const { installPackages, addPackageScripts } = require("../package");

async function setupTool(config) {
  const {
    toolName,
    promptMessage = true,
    packages,
    configFileName,
    configFolder,
    configContent,
    eslintConfig,
    ignoreConfigFileName,
    scripts,
    createCommandPrefix,
    createCommandArguments,
  } = config;

  try {
    // Prompt the user for confirmation
    if (promptMessage) {
      const useTool = await promptUser(
        `Would you like to add ${toolName} to your project?`
      );

      if (!useTool) {
        return;
      }
    }

    logInfo(`Setting up ${toolName}...`);

    // Install required packages
    if (packages) {
      installPackages(packages);
    }

    // Update configuration file
    if (configFileName && configContent) {
      writeToFile(configFileName, configFolder || "", configContent);
    }

    // Update configuration file
    if (ignoreConfigFileName) {
      writeToFile(ignoreConfigFileName, "", ignoreFilesConfig.trim(""));
    }

    // Update package scripts
    if (scripts) {
      addPackageScripts(scripts);
    }

    if (createCommandPrefix) {
      const createCommand = generateCreateCommand(
        createCommandPrefix,
        createCommandArguments
      );

      execSync(createCommand, {
        stdio: "pipe",
        encoding: "utf-8",
      });
    }

    if (eslintConfig) {
      setupEslintForTool(eslintConfig);
    }

    logSuccess(`${toolName} setup complete!`);

    return true;
  } catch (error) {
    logError(`An error occurred during ${toolName} setup:`, error);
  }
}

module.exports = setupTool;
