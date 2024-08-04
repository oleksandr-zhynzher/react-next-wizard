const path = require("path");

const { installMadge } = require("./installMadge");
const { updatePackageScripts } = require("../package");
const { createMadgeConfig } = require("./createMadgeConfig");

async function setupMadge() {
  try {
    const appPath = path.join(process.cwd());
    const madgeScripts = {
      "madge:find-leaf-modules": "madge --leaves src",
      "madge:find-unused-modules": "madge --orphans src",
      "madge:check-circular-deps": "madge --circular src",
      "madge:generate-dependency-graph": "madge --image graph.svg src",
    };

    process.chdir(appPath);
    console.log("Setting up Madge...");

    installMadge();
    createMadgeConfig(appPath);
    updatePackageScripts(appPath, madgeScripts);

    console.log("Madge setup complete!");
  } catch (error) {
    console.error("An error occurred during Prettier setup:", error);
  }
}

module.exports = { setupMadge };
