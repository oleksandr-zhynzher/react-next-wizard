const { setupTool } = require("../../utils");
const { snykScripts, snykPackages } = require("./config");

async function setupSnyk() {
  await setupTool({
    toolName: "Snyk",
    packages: snykPackages,
    scripts: snykScripts,
  });
}

module.exports = { setupSnyk };
