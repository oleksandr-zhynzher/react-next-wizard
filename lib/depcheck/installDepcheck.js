const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");

function installDepcheck() {
  const packageManager = getPackageManager();

  const packages = "depcheck";

  execSync(`${packageManager} add -D ${packages}`, { stdio: "inherit" });
}

module.exports = { installDepcheck };
