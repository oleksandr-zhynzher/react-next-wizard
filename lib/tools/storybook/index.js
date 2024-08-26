const { runCommand } = require("../../package");
const { setupTool, logInfo, logSuccess } = require("../../utils");
const {
  addStorybookStyles,
  addStorybookAddons,
  addStorybookDecorators,
} = require("./setupStorybook");
const {
  storybookAddons,
  storybookEslint,
  storybookScripts,
  storybookPackages,
} = require("./config");

async function setupStorybook() {
  const generateTestsReportCommandPrefix = "test:generate-output";

  const result = await setupTool({
    toolName: "Storybook",
    packages: storybookPackages,
    scripts: storybookScripts,
    eslintConfig: storybookEslint,
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
