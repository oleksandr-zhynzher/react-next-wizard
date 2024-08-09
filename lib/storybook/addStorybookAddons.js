const fs = require("fs");
const path = require("path");

function addStorybookAddons(addons) {
  const mainConfigPath = path.join(".storybook", "main.ts");

  if (fs.existsSync(mainConfigPath)) {
    let mainConfig = fs.readFileSync(mainConfigPath, "utf8");

    addons.forEach((addonName) => {
      // Check if the addon is already present
      if (!mainConfig.includes(addonName)) {
        const addonsMatch = mainConfig.match(/addons:\s*\[(.*?)\]/s);
        if (addonsMatch) {
          const addonsArray = addonsMatch[1].trim();
          const updatedAddonsArray = addonsArray.length
            ? `${addonsArray} '${addonName}',`
            : `'${addonName},'`;

          mainConfig = mainConfig.replace(
            /addons:\s*\[.*?\]/s,
            `addons: [${updatedAddonsArray}]`
          );
        }
      } else {
        console.log(`${addonName} is already in the config.`);
      }
    });

    fs.writeFileSync(mainConfigPath, mainConfig, "utf8");
    console.log(`Addons added to ${mainConfigPath}`);
  } else {
    console.error(
      `Could not find ${mainConfigPath}. Please ensure Storybook is set up correctly.`
    );
  }
}

module.exports = { addStorybookAddons };
