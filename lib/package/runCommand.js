const { getPackageManager } = require("../prompts");

function runCommand(command) {
  const packageManager = getPackageManager();

  try {
    execSync(`${packageManager} run ${command}`, {
      stdio: "pipe",
      encoding: "utf-8",
    });
  } catch (error) {}
}

module.exports = runCommand;
