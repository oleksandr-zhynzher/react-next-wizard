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
const { setupStorybook } = require("../lib/storybook");
const { setupJest } = require("../lib/jest");
const { setupNodeVersion, setupPackageManager } = require("../lib/package");
const { setupLighthouse } = require("../lib/lighthouse");
const { setupCypress } = require("../lib/cypress");
const { setupHusky } = require("../lib/husky");
const { setupSnyk } = require("../lib/snyk");
const { setupDependabot } = require("../lib/dependabot");
const { setupGithubActions } = require("../lib/github-actions");
const { setupWorkingDirectory } = require("../lib/utils/path");
const { reportSuccessfulSetup } = require("../lib/utils/reportSuccessfulSetup");
const { validateApp } = require("../lib/utils/validateApp");

async function main() {
  try {
    await promptProjectName();
    await promptPackageManager();
    await promptUseDefaultSettings();
    process.chdir("../test");

    await setupNextApp();

    setupWorkingDirectory();
    setupNodeVersion();
    setupPackageManager();

    await setupEslint();
    await setupPrettier();
    await setupJest();
    await setupCypress();
    await setupStorybook();
    await setupMadge();
    await setupDepcheck();
    await setupBundleAnalyzer();
    await setupLighthouse();
    await setupSnyk();
    await setupDependabot();
    await setupHusky();
    await setupGithubActions();

    validateApp();
    reportSuccessfulSetup();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
