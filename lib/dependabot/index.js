const { setupTool } = require("../utils");
const { dependabotConfig } = require("../config/dependabot.config");

async function setupDependabot() {
  await setupTool({
    toolName: "Dependabot",
    promptMessage: "Would you like to set up Dependabot for your project?",
    configFolder: ".github",
    configFileName: "dependabot.yml",
    configContent: dependabotConfig,
  });
}

module.exports = { setupDependabot };
