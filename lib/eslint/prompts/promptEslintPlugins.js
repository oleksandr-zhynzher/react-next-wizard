const promptGetCustomEslintSettings = require("./getCustomEslintSettings");
const promptGetEslintDefaultSettings = require("./getEslintDefaultSettings");

const { eslintPluginsConfig } = require("../../config");
const { getIsUsingDefaultSettings } = require("../../prompts");

async function promptEslintPlugins() {
  const useDefaultSettings = getIsUsingDefaultSettings()
    ? true
    : await promptGetEslintDefaultSettings();

  let pluginsToInstall = eslintPluginsConfig.filter(
    (plugin) => plugin.required
  );

  if (!useDefaultSettings) {
    const selectedPlugins = await promptGetCustomEslintSettings();
    pluginsToInstall = [...pluginsToInstall, ...selectedPlugins];
  } else {
    pluginsToInstall = [...eslintPluginsConfig];
  }

  return pluginsToInstall;
}

module.exports = promptEslintPlugins;
