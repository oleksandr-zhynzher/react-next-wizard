const { setupTool } = require("../utils");
const { snykScripts, snykPackages } = require("../config/snyk.config");

async function setupSnyk() {
  const toolName = "Snyk";

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: snykPackages,
    scripts: snykScripts,
  });
}

module.exports = { setupSnyk };
