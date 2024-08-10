const { setupTool } = require("../utils");
const {
  cypressConfig,
  cypressScripts,
  cypressPackages,
  cypressTestResultsFileName,
} = require("../config/cypress.config");
const { setupCypressConfigurations } = require("./setupCypressConfigurations");

async function setupCypress() {
  const toolName = "Cypress";

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: cypressPackages,
    scripts: cypressScripts,
    configFileName: "cypress.config.js",
    configContent: cypressConfig,
  });

  setupCypressConfigurations();
}

module.exports = { setupCypress };
