const { setupTool } = require("../utils");
const { codecovConfig, codecovPackages } = require("../config/codecov.config");

async function setupCodecov() {
  const toolName = "Codecov";

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: codecovPackages,
    configFileName: "codecov.yml",
    configContent: codecovConfig,
  });
}

module.exports = { setupCodecov };
