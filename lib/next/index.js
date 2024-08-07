const { execSync } = require("child_process");
const { generateCreateCommand } = require("../utils");
const { getIsUsingDefaultSettings, getProjectName } = require("../prompts");

async function setupNextApp() {
  const projectName = getProjectName();
  const createCommand = "create-next-app@latest";
  const commandArguments = `${projectName} --ts --eslint --src-dir --import-alias "@/*"`;
  const useDefaultSettings = getIsUsingDefaultSettings();

  let command = generateCreateCommand(createCommand, commandArguments);

  if (useDefaultSettings) {
    command += " --tailwind";
  }

  execSync(command, { stdio: "inherit" });
}

module.exports = { setupNextApp };
