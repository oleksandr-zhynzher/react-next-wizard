const fs = require("fs");
const path = require("path");

function setupNodeVersion() {
  const packageJsonPath = path.join(process.cwd(), "package.json");

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.engines = { node: getNodeVersion() };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(
      `Updated package.json with Node.js version: ${packageJson.engines.node}`
    );
  } else {
    console.error("package.json not found.");
  }
}

function getNodeVersion() {
  return process.version;
}

module.exports = setupNodeVersion;
