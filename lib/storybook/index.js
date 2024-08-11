const {
  addStorybookStyles,
  addStorybookAddons,
  addStorybookDecorators,
} = require("./addStorybookConfigurations");
const { setupTool, logInfo, logSuccess } = require("../utils");
const { runCommand } = require("../package");
const {
  storybookScripts,
  storybookPackages,
  storybookAddons,
} = require("../config/storybook.config");

async function setupStorybook() {
  const generateTestsReportCommandPrefix = "test:generate-output";

  const result = await setupTool({
    toolName: "Storybook",
    promptMessage: "Would you like to add Storybook to your project?",
    packages: storybookPackages,
    scripts: storybookScripts,
    createCommandPrefix: "storybook@latest",
    createCommandArguments: "init --no-dev",
  });

  if (!result) {
    return;
  }

  logInfo("Setting up Storybook Configurations...");

  addStorybookAddons(storybookAddons);
  addStorybookStyles();
  addStorybookDecorators();
  runCommand(`${generateTestsReportCommandPrefix} --passWithNoTests`);

  logSuccess("Storybook configurations setup successfully completed!");
}

module.exports = { setupStorybook };
