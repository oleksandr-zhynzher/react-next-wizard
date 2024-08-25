const path = require("path");

const { setupTool } = require("../../utils");
const { githubActionsConfig } = require("./config");

async function setupGithubActions() {
  const workflowFile = "ci.yml";
  const workflowsDir = path.join(".github", "workflows");

  await setupTool({
    toolName: "GitHub Actions",
    promptMessage: true,
    configFolder: workflowsDir,
    configFileName: workflowFile,
    configContent: githubActionsConfig,
  });
}

module.exports = { setupGithubActions };
