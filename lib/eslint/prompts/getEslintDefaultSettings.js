const inquirer = require("inquirer").default;

async function promptGetEslintDefaultSettings() {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "useDefaultSettings",
      message:
        "Would you like to use the recommended ESLint settings? (Default)",
      default: true,
    },
  ]);

  return answer.useDefaultSettings;
}

module.exports = promptGetEslintDefaultSettings;
