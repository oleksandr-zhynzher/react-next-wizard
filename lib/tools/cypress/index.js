const { setupTool } = require("../../utils");
const { setupCypressConfigurations } = require("./setupCypress");
const { cypressConfig, cypressScripts, cypressPackages } = require("./config");

async function setupCypress() {
  const toolName = "Cypress";

  await setupTool({
    toolName: "Cypress",
    promptMessage: true,
    scripts: cypressScripts,
    packages: cypressPackages,
    configContent: cypressConfig,
    configFileName: "cypress.config.js",
  });

  setupCypressConfigurations();
}

module.exports = { setupCypress };
