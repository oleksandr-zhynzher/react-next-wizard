const fs = require("fs");
const path = require("path");
const { writeToFile } = require("../../utils");
const { cypressSupportConfig } = require("./config");

function setupCypressConfigurations() {
  const supportDir = path.join("cypress", "support");
  const supportFile = "e2e.js";

  if (!fs.existsSync(supportDir)) {
    fs.mkdirSync(supportDir, { recursive: true });
    writeToFile(supportFile, supportDir, cypressSupportConfig);
  }
}

module.exports = { setupCypressConfigurations };
