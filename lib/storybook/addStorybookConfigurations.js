const { readFile, writeToFile } = require("../utils/file");
const { storyBookJestAddonConfig } = require("../config");

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

  console.log("Addons added to Storybook configuration successfully.");
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

  const updatedContent = previewConfig.replace(
    /(import\s+type\s+\{ Preview \}\s+from\s+"@storybook\/react";)/,
    `$1${storyBookJestAddonConfig}`
  );

  writeToFile(previewConfigFile, storybookFolder, updatedContent);

  console.log(
    `Decorators added to Storybook preview configuration successfully.`
  );
}

module.exports = { addStorybookAddons, addStorybookDecorators };
