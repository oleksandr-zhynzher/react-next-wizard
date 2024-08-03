const promptGetCustomEslintSettings = require("./getCustomEslintSettings");
const promptGetEslintDefaultSettings = require("./getEslintDefaultSettings");

const { eslintPluginsConfig } = require("../../config");
const { isUsingDefaultSettings } = require("../../prompts");

async function selectEslintPlugins() {
  const useDefaultSettings = isUsingDefaultSettings()
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

module.exports = selectEslintPlugins;
