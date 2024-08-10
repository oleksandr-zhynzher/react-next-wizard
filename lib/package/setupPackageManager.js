const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");
const { logSuccess } = require("../utils/logger");
const { setupYarn } = require("../utils/setupYarn");
const { readFile, writeToFile } = require("../utils/file");

function setupPackageManager() {
  const packageManager = getPackageManager();
  const packageJsonContent = readFile("package.json");
  const packageJson = JSON.parse(packageJsonContent);

  packageJson.packageManager = `${packageManager}@${getPackageManagerVersion(
    packageManager
  )}`;

  writeToFile("package.json", "", JSON.stringify(packageJson, null, 2));

  if (packageManager === "yarn") {
    setupYarn();
  }

  logSuccess(`Setup package manager: ${packageJson.packageManager}`);
}

function getPackageManagerVersion(packageManager) {
  let version = "unknown";
  try {
    switch (packageManager) {
      case "yarn":
        version = execSync("yarn --version").toString().trim();
        break;
      case "npm":
        version = execSync("npm --version").toString().trim();
        break;
      default:
        console.error(`Unsupported package manager: ${packageManager}`);
    }
  } catch (error) {
    console.error(`Error fetching version for ${packageManager}:`, error);
  }
  return version;
}

module.exports = { setupPackageManager, getPackageManagerVersion };
