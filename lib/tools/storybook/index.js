const { installPackages } = require("../../package");
const { getFramework } = require("../../prompts/promptFramework");
const { setupTool, logInfo, logSuccess } = require("../../utils");
const { storybookAddons, storybookEslint } = require("./config");
const { addTailwindStyles, addStorybookAddons } = require("./setupStorybook");

async function setupStorybook() {
  const storybookCreateCommand = "storybook@latest";

  await setupTool({
    toolName: "Storybook",
    eslintConfig: storybookEslint,
    createCommandPrefix: storybookCreateCommand,
    createCommandArguments: `init --no-dev --yes --disable-telemetry`,
  });

  logInfo("Setting up Storybook Addons...");

  addStorybookAddons(storybookAddons, storybookCreateCommand);

  if (getFramework() === "Next.js") {
    addTailwindStyles();
    installPackages(["webpack"]);
  } else if (getFramework() === "Angular") {
    installPackages(["@angular-devkit/core", "@angular-devkit/architect"]);
  }

  logSuccess("Storybook addons setup successfully completed!");
}

module.exports = { setupStorybook };
