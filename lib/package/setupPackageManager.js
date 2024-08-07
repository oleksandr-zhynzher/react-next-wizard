const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");
const { setupYarn } = require("../utils/setupYarn");

function setupPackageManager() {
  const packageManager = getPackageManager();
  const packageJsonPath = path.join(process.cwd(), "package.json");

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.packageManager = `${packageManager}@${getPackageManagerVersion(
      packageManager
    )}`;

    packageJson.private = true;
    if (packageManager === "yarn") {
      setupYarn();
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(
      `Updated package.json with package manager: ${packageJson.packageManager}`
    );
  } else {
    console.error("package.json not found.");
  }
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

module.exports = setupPackageManager;
