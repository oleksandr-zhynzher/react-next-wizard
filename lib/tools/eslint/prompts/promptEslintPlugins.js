const promptGetCustomEslintSettings = require("./promptGetCustomEslintSettings");
const { getIsUsingDefaultSettings, promptUser } = require("../../../prompts");
const { eslintPluginsConfig } = require("../config");

async function promptEslintPlugins() {
  const useDefaultSettings = getIsUsingDefaultSettings()
    ? true
    : await promptUser(
        "Would you like to use the recommended ESLint plugins and settings?"
      );

  if (useDefaultSettings) {
    return eslintPluginsConfig;
  }

  const optionalPlugins = eslintPluginsConfig.filter(
    (plugin) => !plugin.required
  );
  const requiredPlugins = eslintPluginsConfig.filter(
    (plugin) => plugin.required
  );

  const selectedPlugins = await promptGetCustomEslintSettings(optionalPlugins);
  return [...requiredPlugins, ...selectedPlugins];
}

module.exports = promptEslintPlugins;
