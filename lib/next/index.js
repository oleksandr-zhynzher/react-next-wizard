const { exec, execSync } = require("child_process");
const { generateCreateCommand } = require("../utils");
const { logInfo, logSuccess } = require("../utils/logger");
const { getIsUsingDefaultSettings, getProjectName } = require("../prompts");

async function setupNextApp() {
  const projectName = getProjectName();
  const createCommand = "create-next-app@latest";
  const commandArguments = `${projectName} --ts --eslint --src-dir --import-alias "@/*"`;
  const useDefaultSettings = getIsUsingDefaultSettings();

  logInfo(`Setting up Next.js...`);

  let command = generateCreateCommand(createCommand, commandArguments);

  if (useDefaultSettings) {
    command += " --tailwind --no-app";

    await new Promise((resolve, reject) => {
      exec(command, { encoding: "utf-8" }, (error) =>
        error ? reject(error) : resolve()
      );
    });
  } else {
    execSync(command, { stdio: "inherit" });
  }

  logSuccess(`Next.js setup complete!`);
}

module.exports = { setupNextApp };
