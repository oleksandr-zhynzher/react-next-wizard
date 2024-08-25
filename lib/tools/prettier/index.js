const { setupTool } = require("../../utils");
const {
  prettierConfig,
  prettierScripts,
  prettierPackages,
} = require("./config");

async function setupPrettier() {
  await setupTool({
    toolName: "Prettier",
    scripts: prettierScripts,
    packages: prettierPackages,
    configFileName: ".prettierrc",
    configContent: JSON.stringify(prettierConfig, null, 2),
    ignoreConfigFileName: ".prettierignore",
  });
}

module.exports = { setupPrettier };
