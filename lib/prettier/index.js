const { setupTool } = require("../utils");
const { prettierConfig } = require("../config");

async function setupPrettier() {
  const prettierConfigContent = JSON.stringify(prettierConfig, null, 2);
  const prettierScripts = {
    prettier: "prettier '**/*.{js,jsx,ts,tsx}' --check",
    "prettier:fix": "prettier '**/*.{js,jsx,ts,tsx}' --write",
  };

  await setupTool({
    toolName: "Prettier",
    packages: ["prettier", "eslint-config-prettier", "eslint-plugin-prettier"],
    configFileName: ".prettierrc",
    configContent: prettierConfigContent,
    ignoreConfigFileName: ".prettierignore",
    scripts: prettierScripts,
  });
}

module.exports = { setupPrettier };
