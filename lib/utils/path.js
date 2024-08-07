const path = require("path");
const { getProjectName } = require("../prompts");

function setupWorkingDirectory() {
  const projectName = getProjectName();
  const appPath = path.join(process.cwd(), projectName);
  process.chdir(appPath);
}

module.exports = {
  setupWorkingDirectory,
};
