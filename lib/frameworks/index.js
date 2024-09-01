const { setupNext } = require("./next");
const { setupAngular } = require("./angular");
const { promptFramework } = require("../prompts");
const { setupWorkingDirectory } = require("../utils");
const { setupNodeVersion, setupPackageManager } = require("../package");
const { setupEslintForTool } = require("../tools/eslint/setupEslintForTool");
const { nextEslint } = require("./next/config");

async function setupFramework() {
  const framework = await promptFramework();

  switch (framework) {
    case "Angular":
      await setupAngular();
      break;
    case "Next.js":
      await setupNext();
      break;
    default:
      console.log("Unknown framework selected.");
  }

  setupWorkingDirectory();
  setupNodeVersion();
  setupPackageManager();

  switch (framework) {
    case "Angular":
      break;
    case "Next.js":
      await setupEslintForTool(nextEslint);
      break;
    default:
      console.log("Unknown framework selected.");
  }
}

module.exports = {
  setupFramework,
};
