const { execSync } = require("child_process");
const { getCreateStorybookCommand } = require("./getCreateStorybookCommand");
const { promptUser } = require("../prompts");

async function setupStorybook() {
  const useTool = await promptUser(
    "Would you like to add Storybook to your project?"
  );

  if (!useTool) {
    return;
  }
  const storybookSetupCommand = getCreateStorybookCommand();

  execSync(storybookSetupCommand, { stdio: "inherit" });

  console.log("Storybook has been set up successfully.");
}

module.exports = { setupStorybook };
