const fs = require("fs");
const path = require("path");
const { writeToFile } = require("../utils/file");
const { cypressSupportConfig } = require("../config/cypress.config");

function setupCypressConfigurations() {
  const supportDir = path.join("cypress", "support");
  const supportFile = "e2e.js";

  // Ensure the support directory exists
  if (!fs.existsSync(supportDir)) {
    fs.mkdirSync(supportDir, { recursive: true });
    // Write the file using the provided function
    writeToFile(supportFile, supportDir, cypressSupportConfig);
  }
}

module.exports = { setupCypressConfigurations };
