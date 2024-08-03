const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");

function installEslintPlugins(eslintPlugins) {
  const packageManager = getPackageManager();

  const packages = eslintPlugins
    .map((plugin) => plugin.packageName)
    .filter((packageName) => packageName)
    .join(" ");

  if (packages) {
    execSync(`${packageManager} add -D --force ${packages}`, {
      stdio: "inherit",
    });
  }
}

module.exports = { installEslintPlugins };
