const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

function addAdditionalConfigurations(packageManager, projectName) {
  const appPath = path.join(process.cwd(), projectName);
  process.chdir(appPath);
  console.log("Adding additional configurations...");

  // Example: Install additional dependencies
  execSync(`${packageManager} add axios`, { stdio: "inherit" });

  // Example: Add a custom script in package.json
  const packageJsonPath = path.join(appPath, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  packageJson.scripts["start:custom"] = "next start -p 4000";

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log("Setup complete!");
}

module.exports = addAdditionalConfigurations;
