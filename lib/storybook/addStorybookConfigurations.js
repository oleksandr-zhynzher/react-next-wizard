const { logInfo } = require("../utils/logger");
const { readFile, writeToFile } = require("../utils/file");
const {
  storybookStylesConfig,
  storybookJestAddonConfig,
} = require("../config/storybook.config");

function addStorybookAddons(addons) {
  const mainConfigFile = "main.ts";
  const storybookFolder = ".storybook";
  let mainConfig = readFile(mainConfigFile, storybookFolder);

  if (!mainConfig) {
    return console.error(
      "Storybook configuration not found. Ensure Storybook is set up correctly."
    );
  }

  addons.forEach((addonName) => {
    if (!mainConfig.includes(addonName)) {
      const addonsMatch = mainConfig.match(/addons:\s*\[(.*?)\s*\]/s);

      if (addonsMatch) {
        const addonsArray = addonsMatch[1].trim();
        const updatedAddonsArray = addonsArray.length
          ? `${addonsArray} '${addonName}',`
          : `'${addonName}'`;

        mainConfig = mainConfig.replace(
          /addons:\s*\[.*?\s*\]/s,
          `addons: [${updatedAddonsArray}]`
        );
      }
    }
  });

  writeToFile(mainConfigFile, storybookFolder, mainConfig);

  logInfo("Storybook addons added to configuration successfully.");
}

function addStorybookDecorators() {
  const storybookFolder = ".storybook";
  const previewConfigFile = "preview.ts";
  const previewConfig = readFile(previewConfigFile, storybookFolder);

  if (!previewConfig) {
    return console.error(
      "Storybook preview configuration not found. Ensure Storybook is set up correctly."
    );
  }

  const updatedContent = storybookJestAddonConfig + previewConfig;

  writeToFile(previewConfigFile, storybookFolder, updatedContent);

  logInfo("Storybook Decorators added to preview configuration successfully.");
}

function addStorybookStyles() {
  const storybookFolder = ".storybook";
  const storybookStylesFile = "storybook.css";

  writeToFile(storybookStylesFile, storybookFolder, storybookStylesConfig);

  logInfo("Storybook Styles added successfully.");
}

module.exports = {
  addStorybookStyles,
  addStorybookAddons,
  addStorybookDecorators,
};
