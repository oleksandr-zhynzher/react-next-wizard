const inquirer = require("inquirer").default;

async function getProjectName() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      default: "my-next-app",
    },
  ]);
  return answers.projectName;
}

module.exports = getProjectName;
