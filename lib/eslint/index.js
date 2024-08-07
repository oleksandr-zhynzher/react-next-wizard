const { promptEslintPlugins } = require("./prompts");
const { updateEslintConfig } = require("./updateEslintConfig");
const { setupTool } = require("../utils");
const { readFile } = require("../utils/file");

async function setupEslint() {
  const eslintScripts = {
    lint: "next lint",
    "lint:fix": "next lint --fix",
  };
  const eslintConfigFileName = ".eslintrc.json";
  const eslintConfig = readFile(eslintConfigFileName);

  const pluginsToInstall = await promptEslintPlugins();
  const packages = pluginsToInstall
    .map((plugin) => plugin.packageName)
    .filter((packageName) => packageName);

  const orderedEslintConfig = updateEslintConfig(
    eslintConfig,
    pluginsToInstall
  );

  await setupTool({
    toolName: "Eslint",
    packages,
    configFileName: eslintConfigFileName,
    configContent: JSON.stringify(orderedEslintConfig, null, 2),
    ignoreConfigFileName: ".eslintignore",
    scripts: eslintScripts,
  });
}

module.exports = { setupEslint };
