const { setupTool, logInfo, logSuccess } = require("../../utils");
const { huskyPackages } = require("./config");
const { setupHooks } = require("./setupHooks");

async function setupHusky() {
  const result = await setupTool({
    toolName: "Husky",
    promptMessage: true,
    packages: huskyPackages,
    createCommandPrefix: "husky",
    createCommandArguments: "init",
  });

  if (!result) {
    return;
  }

  logInfo("Setting up Husky pre-commit hook...");

  setupHooks();

  logSuccess("Husky pre-commit hook setup successfully completed!");
}

module.exports = { setupHusky };
