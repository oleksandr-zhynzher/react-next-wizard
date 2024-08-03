const {
  promptProjectName,
  promptPackageManager,
  promptUseDefaultSettings,
} = require("../lib/prompts");
const { setupEslint } = require("../lib/eslint");
const { createNextApp } = require("../lib/next");
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
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
