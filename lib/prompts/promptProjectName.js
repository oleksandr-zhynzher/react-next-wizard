const inquirer = require("inquirer").default;

// Global variable to store the project name
let projectName = "";

async function promptProjectName() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      default: "my-next-app",
    },
  ]);
  projectName = answers.projectName;

  return projectName;
}

// Function to get the project name
function getProjectName() {
  return projectName;
}

module.exports = { promptProjectName, getProjectName };
