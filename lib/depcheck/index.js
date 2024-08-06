const path = require("path");

const { installDepcheck } = require("./installDepcheck");
const { updatePackageScripts } = require("../package");
const { createDepcheckConfig } = require("./createDepcheckConfig");
const { promptUseDepcheck } = require("./prompts");

async function setupDepcheck() {
  try {
    const installPrettier = await promptUseDepcheck();

    if (!installPrettier) {
      return;
    }

    const appPath = path.join(process.cwd());
    const depcheckScripts = {
      depcheck: "depcheck",
    };

    process.chdir(appPath);
    console.log("Setting up Depcheck...");

    installDepcheck();
    createDepcheckConfig(appPath);
    updatePackageScripts(appPath, depcheckScripts);

    console.log("Depcheck setup complete!");
  } catch (error) {
    console.error("An error occurred during Depcheck setup:", error);
  }
}

module.exports = { setupDepcheck };
