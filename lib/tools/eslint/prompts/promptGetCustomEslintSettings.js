const inquirer = require("inquirer").default;

async function promptGetCustomEslintSettings(eslintPlugins) {
  const answer = await inquirer.prompt([
    {
      type: "checkbox",
      name: "selectedPlugins",
      message:
        "Please select the ESLint plugins you wish to use. All are selected by default, you may deselect any if desired:",
      choices: eslintPlugins.map((plugin) => ({
        name: plugin.label,
        value: plugin,
        checked: true, // Preselect all optional plugins
      })),
    },
  ]);

  return answer.selectedPlugins;
}

module.exports = promptGetCustomEslintSettings;
