const { execSync } = require("child_process");
const { addStorybookAddons } = require("./addStorybookAddons");
const { setupTool } = require("../utils");
const { promptUser } = require("../prompts");
const { generateCreateCommand } = require("../utils");

async function setupStorybook() {
  const createCommand = "storybook@latest";
  const commandArguments = "init --no-dev";
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

  const command = generateCreateCommand(createCommand, commandArguments);

  execSync(command, { stdio: "inherit" });

  await setupTool({ packages, scripts });

  addStorybookAddons(addons);
}

module.exports = { setupStorybook };
