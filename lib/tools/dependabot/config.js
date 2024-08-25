const { getPackageManager } = require("../../prompts");

const packageManager = getPackageManager();

const dependabotConfig = `version: 2
updates:
  - package-ecosystem: "${packageManager}" 
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      prefix: "deps"
`;

module.exports = {
  dependabotConfig,
};
