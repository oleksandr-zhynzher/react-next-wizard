const inquirer = require("inquirer").default;

async function promptUsePrettier() {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "useDefaultSettings",
      message:
        "Would you like to add Prettier to your project?",
      default: true,
    },
  ]);

  return answer.useDefaultSettings;
}

module.exports = promptUsePrettier;
