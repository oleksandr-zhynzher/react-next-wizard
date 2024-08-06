const path = require("path");

const { modifyNextConfig } = require("./modifyNextConfig");
const { installBundleAnalyzer } = require("./installBundleAnalyzer");
const { promptUsePrettier } = require("./prompts");
const { updatePackageScripts } = require("../package");

async function setupBundleAnalyzer() {
  try {
    const installPrettier = await promptUsePrettier();

    if (!installPrettier) {
      return;
    }

    const appPath = path.join(process.cwd());
    const depcheckScripts = {
      analyze: "ANALYZE=true next build",
    };

    process.chdir(appPath);

    console.log("Setting up Bundle Analyzer...");

    installBundleAnalyzer();
    updatePackageScripts(appPath, depcheckScripts);
    modifyNextConfig(appPath);

    // Modify the next.config.mjs file
    await modifyNextConfig(appPath);

    console.log("Bundle Analyzer setup complete!");
  } catch (error) {
    console.error("An error occurred during Bundle Analyzer setup:", error);
  }
}

module.exports = { setupBundleAnalyzer };
