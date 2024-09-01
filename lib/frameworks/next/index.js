const { setupTool } = require("../../utils");
const { getIsUsingDefaultSettings, getProjectName } = require("../../prompts");
const { nextEslint } = require("./config");

async function setupNext() {
  const projectName = getProjectName();
  const useDefaultSettings = getIsUsingDefaultSettings();
  const commandArguments = `${projectName} --ts --eslint --src-dir --no-import-alias ${
    useDefaultSettings ? " --tailwind --no-app" : ""
  }`;

  await setupTool({
    toolName: "Next",
    // eslintConfig: nextEslint, should be as post action in framework setup
    createCommandPrefix: "create-next-app@latest",
    createCommandArguments: commandArguments,
  });
}

module.exports = { setupNext };
