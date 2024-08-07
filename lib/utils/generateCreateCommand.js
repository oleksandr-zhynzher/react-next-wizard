const { getPackageManager } = require("../prompts");

function generateCreateCommand(command, args) {
  const packageManager = getPackageManager();

  switch (packageManager) {
    case "npm":
      return `npx ${command} ${args}`;
    case "yarn":
      return `yarn dlx ${command} ${args}`;
    default:
      throw new Error(`Unsupported package manager: ${packageManager}`);
  }
}

module.exports = generateCreateCommand;
