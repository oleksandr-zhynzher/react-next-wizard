const { setupTool, addGitignoreRule } = require("../../utils");
const {
  jestConfig,
  jestScripts,
  jestPackages,
  jestTestResultsFileName,
} = require("./jest.config");

async function setupJest() {
  addGitignoreRule(jestTestResultsFileName);

  await setupTool({
    toolName: "Jest",
    packages: jestPackages,
    scripts: jestScripts,
    configContent: jestConfig,
    configFileName: "jest.config.ts",
  });
}

module.exports = { setupJest };
