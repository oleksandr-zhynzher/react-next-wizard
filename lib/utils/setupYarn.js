const { execSync } = require("child_process");

function setupYarn() {
  execSync(`yarn set version berry`);
}

module.exports = { setupYarn };
