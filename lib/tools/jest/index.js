const { setupTool, addGitignoreRule } = require("../../utils");
const {
  jestEslint,
  jestConfig,
  jestScripts,
  jestPackages,
  jestTestResultsFileName,
} = require("./config");

async function setupJest() {
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
