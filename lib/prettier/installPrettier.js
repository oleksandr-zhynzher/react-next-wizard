const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");

function installPrettier() {
  const packageManager = getPackageManager();

  const packages = "prettier eslint-config-prettier eslint-plugin-prettier";

  execSync(`${packageManager} add -D ${packages}`, { stdio: "inherit" });
}

module.exports = { installPrettier };
