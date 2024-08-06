const inquirer = require("inquirer").default;

async function promptUseMadge() {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "useDefaultSettings",
      message: "Would you like to add Madge to your project?",
      default: true,
    },
  ]);

  return answer.useDefaultSettings;
}

module.exports = promptUseMadge;
