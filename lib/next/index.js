const { execSync } = require("child_process");
const { getCreateCommandPrefix } = require("./getCreateCommandPrefix");
const { getIsUsingDefaultSettings, getProjectName } = require("../prompts");

async function setupNextApp() {
  const projectName = getProjectName();
  const useDefaultSettings = getIsUsingDefaultSettings();
  const createCommandPrefix = getCreateCommandPrefix();

  let command = `${createCommandPrefix} ${projectName} --ts --eslint --src-dir --import-alias "@/*"`;

  if (useDefaultSettings) {
    command += " --tailwind";
  }

  execSync(command, { stdio: "inherit" });
}

module.exports = { setupNextApp };
