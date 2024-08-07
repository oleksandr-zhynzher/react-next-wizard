const inquirer = require("inquirer").default;

const YES_OPTION = "Yes";
const NO_OPTION = "No";

async function promptUser(message) {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "useTool",
      message: message,
      choices: [YES_OPTION, NO_OPTION],
      default: YES_OPTION,
    },
  ]);

  return answer.useTool === YES_OPTION;
}

module.exports = { promptUser };
