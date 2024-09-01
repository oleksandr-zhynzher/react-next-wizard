const inquirer = require("inquirer").default;

let framework = "Next.js";

async function promptFramework() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Which framework would you like to set up?",
      choices: ["Next.js", "Angular"],
      default: framework,
    },
  ]);

  framework = answers.framework;

  return answers.framework;
}

function getFramework() {
  return framework;
}

module.exports = { promptFramework, getFramework };
