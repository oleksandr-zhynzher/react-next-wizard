const { getFramework } = require("../../prompts/promptFramework");
const { setupTool, addGitignoreRule } = require("../../utils");
const {
  jestEslint,
  jestConfig,
  jestScripts,
  jestPackages,
  jestTestResultsFileName,
} = require("./config");

async function setupJest() {
  if (getFramework() === "Angular") {
    return;
  }

  addGitignoreRule(jestTestResultsFileName);

  await setupTool({
    toolName: "Jest",
    packages: jestPackages,
    scripts: jestScripts,
    configContent: jestConfig,
    eslintConfig: jestEslint,
    configFileName: "jest.config.ts",
  });
}

module.exports = { setupJest };
