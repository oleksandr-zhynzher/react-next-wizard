const { setupTool, addGitignoreRule } = require("../utils");
const {
  lighthouseConfig,
  lighthouseScripts,
  lighthousePackages,
} = require("../config/lighthouse.config");

async function setupLighthouse() {
  addGitignoreRule(".lighthouseci/");

  await setupTool({
    toolName: "Lighthouse",
    packages: lighthousePackages,
    configFileName: "lighthouserc.json",
    configContent: JSON.stringify(lighthouseConfig, null, 2),
    scripts: lighthouseScripts,
  });
}

module.exports = { setupLighthouse };
