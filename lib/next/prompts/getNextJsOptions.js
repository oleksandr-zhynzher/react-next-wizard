const inquirer = require("inquirer").default;

async function getNextJsOptions() {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "useTailwind",
      message: "Would you like to use Tailwind CSS?",
      default: false,
    },
    {
      type: "confirm",
      name: "useAppRouter",
      message: "Would you like to use App Router? (recommended)",
      default: true,
    },
  ]);
  return answers;
}

module.exports = getNextJsOptions;
