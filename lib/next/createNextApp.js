const { execSync } = require("child_process");
const { getCreateCommandPrefix } = require("../utils");
const { getIsUsingDefaultSettings, getProjectName } = require("../prompts");

async function createNextApp() {
  const projectName = getProjectName();
  const useDefaultSettings = getIsUsingDefaultSettings();
  const createCommandPrefix = getCreateCommandPrefix();

  let command = `${createCommandPrefix} ${projectName} --ts --eslint --src-dir --import-alias "@/*"`;

  if (useDefaultSettings) {
    command += " --tailwind";
  }

  const envVars = {
    NEXT_APP_USE_SRC_DIR: "yes",
  };

  const env = { ...process.env, ...envVars };

  execSync(command, { stdio: "inherit", env });
}

module.exports = createNextApp;
