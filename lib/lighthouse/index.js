const { setupTool } = require("../utils");
const {
  lighthouseConfig,
  lighthouseScripts,
  lighthousePackages,
} = require("../config/lighthouse.config");

async function setupLighthouse() {
  await setupTool({
    toolName: "Lighthouse",
    packages: lighthousePackages,
    configFileName: "lighthouserc.json",
    configContent: JSON.stringify(lighthouseConfig, null, 2),
    scripts: lighthouseScripts,
  });
}

module.exports = { setupLighthouse };
