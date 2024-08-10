const { setupTool, addGitignoreRule } = require("../utils");
const {
  jestConfig,
  jestScripts,
  jestPackages,
  jestTestResultsFileName,
} = require("../config/jest.config");

async function setupJest() {
  const toolName = "Jest";
  const configFileName = "jest.config.ts";

  addGitignoreRule(jestTestResultsFileName);

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: jestPackages,
    scripts: jestScripts,
    configFileName: configFileName,
    configContent: jestConfig,
  });
}

module.exports = { setupJest };
