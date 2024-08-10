const { getPackageManager } = require("../prompts");

function generateCreateCommand(
  command,
  args = "",
  prefix = { npm: "npx", yarn: "yarn dlx" }
) {
  const packageManager = getPackageManager();

  switch (packageManager) {
    case "npm":
      return `${prefix[packageManager]} ${command} ${args}`;
    case "yarn":
      return `${prefix[packageManager]} ${command} ${args}`;
    default:
      throw new Error(`Unsupported package manager: ${packageManager}`);
  }
}

module.exports = generateCreateCommand;
