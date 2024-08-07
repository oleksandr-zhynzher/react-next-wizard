const inquirer = require("inquirer").default;

async function promptUser(message) {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "useTool",
      message: message,
      default: true,
    },
  ]);

  return answer.useTool;
}

module.exports = promptUser;
