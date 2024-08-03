const inquirer = require("inquirer").default;

// Global variable to track selected package manager
let packageManager = "yarn";

async function promptPackageManager() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Which package manager would you like to use?",
      choices: ["npm", "yarn"],
      default: "yarn",
    },
  ]);

  packageManager = answers.packageManager;

  return packageManager;
}

// Function to get the selected package manager
function getPackageManager() {
  return packageManager;
}

module.exports = { promptPackageManager, getPackageManager };
