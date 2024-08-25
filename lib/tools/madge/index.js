const { setupTool } = require("../../utils");
const { madgeConfig, madgeScripts, madgePackages } = require("./config");

async function setupMadge() {
  await setupTool({
    toolName: "Madge",
    packages: madgePackages,
    configFileName: ".madgerc",
    scripts: madgeScripts,
    configContent: JSON.stringify(madgeConfig, null, 2),
  });
}

module.exports = { setupMadge };
