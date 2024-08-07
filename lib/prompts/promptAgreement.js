const inquirer = require("inquirer").default;

const YES_OPTION = "Yes";
const NO_OPTION = "No";

async function promptAgreement(message) {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "agreed",
      message: message,
      choices: [YES_OPTION, NO_OPTION],
      default: YES_OPTION,
    },
  ]);

  return answer.agreed === YES_OPTION;
}

module.exports = { promptAgreement };
