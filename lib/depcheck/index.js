const { setupTool } = require("../utils");
const {
  depcheckConfig,
  depcheckPackages,
  depcheckScripts,
} = require("../config/depcheck.config");

async function setupDepcheck() {
  const toolName = "Depcheck";

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: depcheckPackages,
    scripts: depcheckScripts,
    configFileName: ".depcheckrc",
    configContent: JSON.stringify(depcheckConfig, null, 2),
  });
}

module.exports = { setupDepcheck };
