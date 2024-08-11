const { execSync } = require("child_process");

const { getPackageManager } = require("../prompts");
const { logInfo, logSuccess } = require("./logger");

function validateApp() {
  const packageManager = getPackageManager();
  const validateCommands = ["lint:fix", "prettier:fix", "test:generate-output"];

  logInfo(`Starting application validation...`);

  validateCommands.map((command) => {
    execSync(`${packageManager} run ${command}`, {
      stdio: "inherit",
    });
  });

  logSuccess(`Application validation successful!`);
}

module.exports = { validateApp };
