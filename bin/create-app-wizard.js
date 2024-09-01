const {
  setupJest,
  setupKnip,
  setupSnyk,
  setupHusky,
  setupMadge,
  setupEslint,
  setupCodecov,
  setupCypress,
  setupDepcheck,
  setupPrettier,
  setupStorybook,
  setupLighthouse,
  setupDependabot,
  setupGithubActions,
  setupBundleAnalyzer,
} = require("../lib/tools");
const {
  promptProjectName,
  promptPackageManager,
  promptUseDefaultSettings,
} = require("../lib/prompts");
const {
  setupWorkingDirectory,
  reportSuccessfulSetup,
  validateApp,
} = require("../lib/utils");
const { setupFramework } = require("../lib/frameworks");
const { setupNodeVersion, setupPackageManager } = require("../lib/package");

async function main() {
  try {
    await promptProjectName();
    await promptPackageManager();
    await promptUseDefaultSettings();
    process.chdir("../test");

    await setupFramework();

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
    await setupKnip();
    await setupSnyk();
    await setupDependabot();
    await setupCodecov();
    await setupHusky();
    await setupGithubActions();

    validateApp();
    reportSuccessfulSetup();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
