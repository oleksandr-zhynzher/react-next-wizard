const { setupTool } = require("../../utils");
const { knipConfig, knipScripts, knipPackages } = require("./knip.config");

async function setupKnip() {
  await setupTool({
    toolName: "Knip",
    packages: knipPackages,
    scripts: knipScripts,
    configFileName: "knip.json",
    configContent: JSON.stringify(knipConfig, null, 2),
  });
}

module.exports = { setupKnip };
