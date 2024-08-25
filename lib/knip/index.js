const { setupTool } = require("../utils");
const {
  knipConfig,
  knipScripts,
  knipPackages,
} = require("../config/knip.config");

async function setupKnip() {
  const toolName = "Knip";

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: knipPackages,
    scripts: knipScripts,
    configFileName: "knip.json",
    configContent: JSON.stringify(knipConfig, null, 2),
  });
}

module.exports = { setupKnip };
