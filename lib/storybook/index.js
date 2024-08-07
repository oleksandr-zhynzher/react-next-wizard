const { execSync } = require("child_process");
const { generateCreateCommand } = require("../utils");
const { promptUser } = require("../prompts");

async function setupStorybook() {
  const createCommand = "storybook@latest";
  const commandArguments = "init --no-dev";
  const useTool = await promptUser(
    "Would you like to add Storybook to your project?"
  );

  if (!useTool) {
    return;
  }

  const command = generateCreateCommand(createCommand, commandArguments);

  execSync(command, { stdio: "inherit" });

  console.log("Storybook has been set up successfully.");
}

module.exports = { setupStorybook };
