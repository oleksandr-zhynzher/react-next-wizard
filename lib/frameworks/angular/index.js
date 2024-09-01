const { setupTool } = require("../../utils");
const { getProjectName } = require("../../prompts");

async function setupAngular() {
  await setupTool({
    toolName: "Angular",
    createCommandPrefix: `@angular/cli new ${getProjectName()}`,
    createCommandArguments: `--strict --routing --style=scss --ssr --strict`,
  });
}

module.exports = { setupAngular };
