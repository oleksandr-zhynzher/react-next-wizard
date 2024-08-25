const { setupTool } = require("../../utils");
const {
  depcheckConfig,
  depcheckPackages,
  depcheckScripts,
} = require("./config");

async function setupDepcheck() {
  await setupTool({
    toolName: "Depcheck",
    scripts: depcheckScripts,
    packages: depcheckPackages,
    configFileName: ".depcheckrc",
    configContent: JSON.stringify(depcheckConfig, null, 2),
  });
}

module.exports = { setupDepcheck };
