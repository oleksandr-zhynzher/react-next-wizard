const { execSync } = require("child_process");
const { writeToFile } = require("./file");
const { yarnConfig } = require("../config");

function setupYarn() {

  execSync(`yarn set version 4.4.0`, { stdio: "inherit" });
  writeToFile(".yarnrc.yml", yarnConfig.trim(""));
  execSync(`yarn install`, { stdio: "inherit" });
}

module.exports = { setupYarn };
