const { setupTool } = require("../utils");
const { madgeConfig } = require("../config");

async function setupMadge() {
  const toolName = "Madge";
  const madgeConfigContent = JSON.stringify(madgeConfig, null, 2);
  const madgeScripts = {
    "madge:find-leaf-modules": "madge --leaves src",
    "madge:find-unused-modules": "madge --orphans src",
    "madge:check-circular-deps": "madge --circular src",
    "madge:generate-dependency-graph": "madge --image graph.svg src",
  };

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: ["madge"],
    configFileName: ".madgerc",
    configContent: madgeConfigContent,
    scripts: madgeScripts,
  });
}

module.exports = { setupMadge };
