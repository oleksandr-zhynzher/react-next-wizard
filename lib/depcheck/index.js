const { setupTool } = require("../utils");
const { depcheckConfig } = require("../config");

async function setupDepcheck() {
  const toolName = "Depcheck";
  const depcheckConfigContent = JSON.stringify(depcheckConfig, null, 2);

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: ["depcheck"],
    configFileName: ".depcheckrc",
    configContent: depcheckConfigContent,
    scripts: { depcheck: "depcheck" },
  });
}

module.exports = { setupDepcheck };
