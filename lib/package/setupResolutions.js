const fs = require("fs");
const path = require("path");

function setupResolutions() {
  const packageJsonPath = path.join(process.cwd(), "package.json");

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
