const fs = require("fs");
const path = require("path");
const { madgeConfig } = require("../config");

function createMadgeConfig(appPath) {
  const madgeConfigPath = path.join(appPath, ".madgerc");

  fs.writeFileSync(
    madgeConfigPath,
    JSON.stringify(madgeConfig, null, 2),
    "utf-8"
  );
}

module.exports = { createMadgeConfig };
