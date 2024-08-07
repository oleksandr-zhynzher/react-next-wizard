const {
  promptProjectName,
  promptPackageManager,
  promptUseDefaultSettings,
} = require("../lib/prompts");
const { setupNextApp } = require("../lib/next");
const { setupEslint } = require("../lib/eslint");
const { setupPrettier } = require("../lib/prettier");
const { setupMadge } = require("../lib/madge");
const { setupDepcheck } = require("../lib/depcheck");
const { setupBundleAnalyzer } = require("../lib/bundle-analyzer");
const {
  setupNodeVersion,
  setupResolutions,
  setupPackageManager,
} = require("../lib/package");
const { setupWorkingDirectory } = require("../lib/utils/path");

async function main() {
  try {
    await promptProjectName();
    await promptPackageManager();
    await promptUseDefaultSettings();

    await setupNextApp();

    setupWorkingDirectory();
    setupNodeVersion();
    setupResolutions();
    setupPackageManager();

    await setupEslint();
    await setupPrettier();
    await setupMadge();
    await setupDepcheck();
    await setupBundleAnalyzer();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
