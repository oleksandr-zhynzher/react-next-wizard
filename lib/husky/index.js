const { setupHooks } = require("./setupHooks");
const { setupTool, logInfo, logSuccess } = require("../utils");
const { huskyPackages } = require("../config/husky.config");

async function setupHusky() {
  const result = await setupTool({
    toolName: "Husky",
    promptMessage: "Would you like to set up Husky with a pre-commit hook?",
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
