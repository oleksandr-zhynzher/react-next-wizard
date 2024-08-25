const { setupTool } = require("../../utils");
const { dependabotConfig } = require("./config");

async function setupDependabot() {
  await setupTool({
    toolName: "Dependabot",
    configFolder: ".github",
    configFileName: "dependabot.yml",
    configContent: dependabotConfig,
  });
}

module.exports = { setupDependabot };
