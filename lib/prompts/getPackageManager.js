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

module.exports = getPackageManager;
