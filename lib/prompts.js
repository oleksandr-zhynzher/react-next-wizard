const inquirer = require("inquirer").default;

async function getPackageManager() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Which package manager would you like to use?",
      choices: ["npm", "yarn"],
      default: "yarn",
    },
  ]);
  return answers.packageManager;
}

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

async function getNextJsOptions() {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "useTailwind",
      message: "Would you like to use Tailwind CSS?",
      default: false,
    },
    {
      type: "confirm",
      name: "useAppRouter",
      message: "Would you like to use App Router? (recommended)",
      default: true,
    },
  ]);
  return answers;
}

module.exports = { getPackageManager, getProjectName, getNextJsOptions };
