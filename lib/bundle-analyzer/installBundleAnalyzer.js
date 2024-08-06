const { execSync } = require("child_process");
const { getPackageManager } = require("../prompts");

function installBundleAnalyzer() {
  const packageManager = getPackageManager();

  const packages = "webpack-bundle-analyzer @next/bundle-analyzer";

  execSync(`${packageManager} add -D ${packages}`, { stdio: "inherit" });
}

module.exports = { installBundleAnalyzer };
