const { setupTool, addGitignoreRule } = require("../../utils");
const {
  lighthouseConfig,
  lighthouseScripts,
  lighthousePackages,
} = require("./config");

async function setupLighthouse() {
  addGitignoreRule(".lighthouseci/");

  await setupTool({
    toolName: "Lighthouse",
    scripts: lighthouseScripts,
    packages: lighthousePackages,
    configFileName: "lighthouserc.json",
    configContent: JSON.stringify(lighthouseConfig, null, 2),
  });
}

module.exports = { setupLighthouse };
