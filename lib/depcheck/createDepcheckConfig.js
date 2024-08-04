const fs = require("fs");
const path = require("path");
const { depcheckConfig } = require("../config");

function createDepcheckConfig(appPath) {
  const depcheckConfigPath = path.join(appPath, ".depcheckrc");

  fs.writeFileSync(
    depcheckConfigPath,
    JSON.stringify(depcheckConfig, null, 2),
    "utf-8"
  );
}

module.exports = { createDepcheckConfig };
