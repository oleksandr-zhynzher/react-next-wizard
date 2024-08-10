const { execSync } = require("child_process");
const { writeToFile } = require("./file");
const { yarnConfig } = require("../config");

function setupYarn() {
  const yarnVersion = "4.4.0";

  execSync(`yarn set version ${yarnVersion}`, {
    stdio: "pipe",
    encoding: "utf-8",
  });

  writeToFile(".yarnrc.yml", "", yarnConfig.trim(""));

  execSync(`yarn install`, {
    stdio: "pipe",
    encoding: "utf-8",
  });
}

module.exports = { setupYarn };
