const inquirer = require("inquirer").default;

const { eslintPluginsConfig } = require("../../config");

async function promptGetCustomEslintSettings() {
  // Filter out required plugins and only keep optional ones
  const customPlugins = eslintPluginsConfig.filter(
    (plugin) => !plugin.required
  );

  if (customPlugins.length === 0) {
    console.log("No optional ESLint plugins are available to configure.");
    return []; // Return an empty array if no optional plugins are available
  }

  const answer = await inquirer.prompt([
    {
      type: "checkbox",
      name: "selectedPlugins",
      message:
        "Please select the ESLint plugins you wish to use. All are selected by default, you may deselect any if desired:",
      choices: customPlugins.map((plugin) => ({
        name: plugin.label,
        value: plugin,
        checked: true, // Preselect all optional plugins
      })),
    },
  ]);

  return answer.selectedPlugins;
}

module.exports = promptGetCustomEslintSettings;
