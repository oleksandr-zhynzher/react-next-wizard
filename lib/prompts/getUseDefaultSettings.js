const inquirer = require("inquirer").default;

// Global variable to track if the user wants to use default settings
let useDefaultSettings = false;

async function promptUseDefaultSettings() {
  // Prompt the user to confirm if they want to use the default settings for the whole app
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "useDefaultSettings",
      message:
        "Would you like to use the default settings for the entire app setup?",
      default: true,
    },
  ]);

  // Set the global variable based on the user's choice
  useDefaultSettings = answer.useDefaultSettings;

  return useDefaultSettings;
}

// Function to check if default settings are being used
function getIsUsingDefaultSettings() {
  return useDefaultSettings;
}

module.exports = { promptUseDefaultSettings, getIsUsingDefaultSettings };
