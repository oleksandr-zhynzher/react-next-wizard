const fs = require("fs");
const path = require("path");

const { ignoreFilesConfig } = require("../config");

function createEslintIgnoreFile(appPath) {
  const eslintIgnorePath = path.join(appPath, ".eslintignore");
  const eslintIgnoreContent = ignoreFilesConfig;

  fs.writeFileSync(eslintIgnorePath, eslintIgnoreContent.trim(), "utf-8");
}

module.exports = { createEslintIgnoreFile };
