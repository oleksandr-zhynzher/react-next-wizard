const { runCommand } = require("../package");
const { logInfo, logSuccess } = require("./logger");

function validateApp() {
  const validateCommands = ["lint:fix", "prettier:fix"];

  logInfo(`Starting application validation...`);

  validateCommands.map((command) => {
    runCommand(command);
  });

  logSuccess(`Application validation successful!`);
}

module.exports = { validateApp };
