const fs = require("fs");
const path = require("path");
const { getProjectName } = require("../prompts");

function setupResolutions() {
  const projectName = getProjectName();
  const appPath = path.join(process.cwd(), projectName);
  const packageJsonPath = path.join(appPath, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.resolutions = {
      "strip-ansi": "6.0.0",
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  } else {
    console.error("package.json not found.");
  }
}

module.exports = setupResolutions;
