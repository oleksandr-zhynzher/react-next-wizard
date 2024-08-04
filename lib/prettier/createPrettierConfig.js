const fs = require("fs");
const path = require("path");
const { prettierConfig, ignoreFilesConfig } = require("../config");

function createPrettierConfig(appPath) {
  const prettierConfigPath = path.join(appPath, ".prettierrc");
  const prettierIgnorePath = path.join(appPath, ".prettierignore");

  fs.writeFileSync(
    prettierConfigPath,
    JSON.stringify(prettierConfig, null, 2),
    "utf-8"
  );
  fs.writeFileSync(prettierIgnorePath, ignoreFilesConfig.trim(), "utf-8");
}

module.exports = { createPrettierConfig };
