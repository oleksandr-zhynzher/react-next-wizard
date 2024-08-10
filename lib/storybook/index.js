const { execSync } = require("child_process");
const {
  addStorybookAddons,
  addStorybookDecorators,
} = require("./addStorybookConfigurations");
const {
  setupTool,
  generateCreateCommand,
  logInfo,
  logSuccess,
} = require("../utils");
const { runCommand } = require("../package");
const {
  storybookScripts,
  storybookPackages,
  storybookAddons,
} = require("../config/storybook.config");

async function setupStorybook() {
  const createCommandPrefix = "storybook@latest";
  const createCommandArguments = "init --no-dev";
  const generateTestsReportCommandPrefix = "test:generate-output";

  const result = await setupTool({
    toolName: "Storybook",
    promptMessage: "Would you like to add Storybook to your project?",
    packages: storybookPackages,
    scripts: storybookScripts,
  });

  if (!result) {
    return;
  }

  const createCommand = generateCreateCommand(
    createCommandPrefix,
    createCommandArguments
  );

  logInfo("Setting up Storybook Configurations...");

  execSync(createCommand, {
    stdio: "pipe",
    encoding: "utf-8",
  });
  addStorybookAddons(storybookAddons);
  addStorybookDecorators();
  runCommand(`${generateTestsReportCommandPrefix} --passWithNoTests`);

  logSuccess("Storybook configurations setup successfully completed!");
}

module.exports = { setupStorybook };
