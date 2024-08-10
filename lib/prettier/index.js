const { setupTool } = require("../utils");
const {
  prettierConfig,
  prettierScripts,
  prettierPackages,
} = require("../config/prettier.config");

async function setupPrettier() {
  await setupTool({
    toolName: "Prettier",
    packages: prettierPackages,
    configFileName: ".prettierrc",
    configContent: JSON.stringify(prettierConfig, null, 2),
    ignoreConfigFileName: ".prettierignore",
    scripts: prettierScripts,
  });
}

module.exports = { setupPrettier };
