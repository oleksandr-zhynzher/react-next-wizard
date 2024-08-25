const { setupTool, readFile } = require("../../utils");
const { promptEslintPlugins } = require("./prompts");
const { updateEslintConfig } = require("./setupEslintConfig");
const { eslintScripts } = require("./config");

async function setupEslint() {
  const eslintConfigFileName = ".eslintrc.json";

  const pluginsToInstall = await promptEslintPlugins();
  const packages = pluginsToInstall
    .map((plugin) => plugin.packageName)
    .filter((packageName) => packageName);

  const eslintConfig = updateEslintConfig(
    JSON.parse(readFile(eslintConfigFileName)),
    pluginsToInstall
  );

  await setupTool({
    toolName: "Eslint",
    promptMessage: false,
    packages,
    configFileName: eslintConfigFileName,
    configContent: JSON.stringify(eslintConfig, null, 2),
    ignoreConfigFileName: ".eslintignore",
    scripts: eslintScripts,
  });
}

module.exports = { setupEslint };
