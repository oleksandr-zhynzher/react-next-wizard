const { getPackageManager } = require("../prompts");

function getCreateCommandPrefix() {
  const packageManager = getPackageManager();

  if (packageManager === "npm") {
    return "npx create-next-app@latest";
  } else if (packageManager === "yarn") {
    return "yarn dlx create-next-app@latest";
  } else {
    throw new Error(`Unsupported package manager: ${packageManager}`);
  }
}

module.exports = { getCreateCommandPrefix };
