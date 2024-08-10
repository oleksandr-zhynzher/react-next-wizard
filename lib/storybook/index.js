const { execSync } = require("child_process");
const {
  addStorybookAddons,
  addStorybookDecorators,
} = require("./addStorybookConfigurations");
const { promptUser, getPackageManager } = require("../prompts");
const { setupTool, generateCreateCommand } = require("../utils");

async function setupStorybook() {
  const packageManager = getPackageManager();
  const createCommandPrefix = "storybook@latest";
  const createCommandArguments = "init --no-dev";
  const generateTestsReportCommandPrefix = "test:generate-output";
  const scripts = {
    storybook: "storybook dev -p 6006",
    "storybook:build": "storybook build",
    "storybook:test": "test-storybook",
  };
  const packages = [
    "@storybook/test-runner",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-measure",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-jest",
  ];
  const addons = [
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-measure",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-jest",
  ];

  const useTool = await promptUser(
    "Would you like to add Storybook to your project?"
  );

  if (!useTool) {
    return;
  }

  const createCommand = generateCreateCommand(
    createCommandPrefix,
    createCommandArguments
  );

  execSync(createCommand, { stdio: "inherit" });

  await setupTool({ toolName: "storybook", packages, scripts });

  addStorybookAddons(addons);
  addStorybookDecorators();
  execSync(`${packageManager} ${generateTestsReportCommandPrefix} --passWithNoTests`, {
    stdio: "inherit",
  });
}

module.exports = { setupStorybook };
