const { execSync } = require("child_process");
const { logInfo } = require("../../utils/logger");
const { writeToFile } = require("../../utils/file");
const generateCreateCommand = require("../../utils/generateCreateCommand");
const { tailwindStylesConfig } = require("./config");

function addStorybookAddons(addons, storybookCommandPrefix) {
  addons.forEach((addon) => {
    const addAddonCommand = generateCreateCommand(
      `${storybookCommandPrefix} add`,
      addon
    );

    execSync(addAddonCommand, {
      stdio: "pipe",
      encoding: "utf-8",
    });
  });
}

function addTailwindStyles() {
  const storybookFolder = ".storybook";
  const storybookStylesFile = "storybook.css";

  writeToFile(storybookStylesFile, storybookFolder, tailwindStylesConfig);
}

module.exports = {
  addTailwindStyles,
  addStorybookAddons,
};
