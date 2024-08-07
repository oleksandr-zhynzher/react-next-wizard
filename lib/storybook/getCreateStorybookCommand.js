const { getPackageManager } = require("../prompts");

function getCreateStorybookCommand() {
  const packageManager = getPackageManager();
  if (packageManager === "npm") {
    return "npx storybook@latest init";
  } else if (packageManager === "yarn") {
    return "yarn dlx storybook@latest init";
  } else {
    throw new Error(`Unsupported package manager: ${packageManager}`);
  }
}

module.exports = { getCreateStorybookCommand };
