const { readFile, writeToFile } = require("../utils/file");

function addPackageScripts(scripts) {
  const packageJsonContent = readFile("package.json");

  if (!packageJsonContent) {
    console.error(
      "package.json not found. Make sure you have a valid project setup."
    );
  }

  const packageJson = JSON.parse(packageJsonContent);

  for (const scriptName in scripts) {
    if (packageJson.scripts && packageJson.scripts[scriptName]) {
      delete packageJson.scripts[scriptName];
    }
  }

  packageJson.scripts = {
    ...packageJson.scripts,
    ...scripts,
  };

  writeToFile("package.json", "", JSON.stringify(packageJson, null, 2));
}

module.exports = addPackageScripts;
