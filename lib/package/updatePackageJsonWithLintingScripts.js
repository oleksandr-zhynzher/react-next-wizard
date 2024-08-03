const fs = require("fs");
const path = require("path");

function updatePackageJsonWithLintingScripts(appPath) {
  const packageJsonPath = path.join(appPath, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    // Remove existing "lint" script if it exists
    if (packageJson.scripts && packageJson.scripts.lint) {
      delete packageJson.scripts.lint;
    }

    // Add new linting scripts
    packageJson.scripts = {
      ...packageJson.scripts,
      lint: "next lint",
      "lint:fix": "next lint --fix",
    };

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf-8"
    );
  } else {
    console.error(
      "package.json not found. Make sure you have a valid project setup."
    );
  }
}

module.exports = updatePackageJsonWithLintingScripts;
