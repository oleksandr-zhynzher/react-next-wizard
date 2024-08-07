const fs = require("fs");
const path = require("path");

function addPackageScripts(scripts) {
  const packageJsonPath = path.join(process.cwd(), "package.json");

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    for (const scriptName in scripts) {
      if (packageJson.scripts && packageJson.scripts[scriptName]) {
        delete packageJson.scripts[scriptName];
      }
    }

    packageJson.scripts = {
      ...packageJson.scripts,
      ...scripts,
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

module.exports = addPackageScripts;
