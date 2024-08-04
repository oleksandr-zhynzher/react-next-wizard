const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");

function installMadge() {
  const packageManager = getPackageManager();

  const packages = "madge";

  execSync(`${packageManager} add -D ${packages}`, { stdio: "inherit" });
}

module.exports = { installMadge };
