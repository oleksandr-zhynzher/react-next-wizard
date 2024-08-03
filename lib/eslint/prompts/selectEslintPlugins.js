const promptGetCustomEslintSettings = require("./getCustomEslintSettings");
const promptGetEslintDefaultSettings = require("./getEslintDefaultSettings");

const { eslintPluginsConfig } = require("../../config");

async function selectEslintPlugins() {
  const useDefaultSettings = await promptGetEslintDefaultSettings();

  let pluginsToInstall = eslintPluginsConfig.filter(
    (plugin) => plugin.required
  );

  if (!useDefaultSettings) {
    const selectedPlugins = await promptGetCustomEslintSettings();
    pluginsToInstall = [...pluginsToInstall, ...selectedPlugins];
  } else {
    pluginsToInstall = [
      ...pluginsToInstall,
      ...eslintPluginsConfig.filter((plugin) => !plugin.required),
    ];
  }

  return pluginsToInstall;
}

module.exports = selectEslintPlugins;
