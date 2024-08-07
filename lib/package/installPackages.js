const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");

function installPackages(packages) {
  const packageManager = getPackageManager();
  execSync(`${packageManager} add -D ${packages.join(" ")}`, {
    stdio: "inherit",
  });
}

module.exports = installPackages;
