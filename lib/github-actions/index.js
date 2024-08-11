const path = require("path");
const { setupTool } = require("../utils");
const { githubActionsConfig } = require("../config/github-actions.config");

async function setupGithubActions() {
  const workflowFile = "ci.yml";
  const workflowsDir = path.join(".github", "workflows");

  await setupTool({
    toolName: "GitHub Actions",
    promptMessage: "Would you like to set up GitHub Actions for your project?",
    configFileName: workflowFile,
    configFolder: workflowsDir,
    configContent: githubActionsConfig,
  });
}

module.exports = { setupGithubActions };
