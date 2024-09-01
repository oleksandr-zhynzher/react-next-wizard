const inquirer = require("inquirer").default;

async function promptFramework() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Which framework would you like to set up?",
      choices: ["Angular", "Next.js"],
      default: "Next.js",
    },
  ]);

  return answers.framework;
}

module.exports = { promptFramework };
