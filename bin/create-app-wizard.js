const {
  promptProjectName,
  promptPackageManager,
  promptUseDefaultSettings,
} = require("../lib/prompts");
const { createNextApp } = require("../lib/next");
const { setupEslint } = require("../lib/eslint");
const { setupPrettier } = require("../lib/prettier");
const { setupPackageManager, setupNodeVersion } = require("../lib/package");

async function main() {
  try {
    await promptProjectName();
    await promptPackageManager();
    await promptUseDefaultSettings();

    await createNextApp();
    setupNodeVersion();
    setupPackageManager();
    await setupEslint();
    await setupPrettier();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
