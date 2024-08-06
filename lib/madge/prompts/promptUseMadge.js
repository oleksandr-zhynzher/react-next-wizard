const inquirer = require("inquirer").default;

async function promptUseDepcheck() {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "useDefaultSettings",
      message: "Would you like to add Depcheck to your project?",
      default: true,
    },
  ]);

  return answer.useDefaultSettings;
}

module.exports = promptUseDepcheck;
