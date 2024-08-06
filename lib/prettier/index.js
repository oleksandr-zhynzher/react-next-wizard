const path = require("path");

const { promptUsePrettier } = require("./prompts");
const { installPrettier } = require("./installPrettier");
const { createPrettierConfig } = require("./createPrettierConfig");

const { updatePackageScripts } = require("../package");

async function setupPrettier() {
  try {
    const addPrettier = await promptUsePrettier();

    if (!addPrettier) {
      return;
    }

    const appPath = path.join(process.cwd());
    const prettierScripts = {
      prettier: "prettier '**/*.{js,jsx,ts,tsx}' --check",
      "prettier:fix": "prettier '**/*.{js,jsx,ts,tsx}' --write",
    };

    process.chdir(appPath);
    console.log("Setting up Prettier...");

    installPrettier();
    createPrettierConfig(appPath);
    updatePackageScripts(appPath, prettierScripts);

    console.log("Prettier setup complete!");
  } catch (error) {
    console.error("An error occurred during Prettier setup:", error);
  }
}

module.exports = { setupPrettier };
