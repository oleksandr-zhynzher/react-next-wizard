const { promptUser } = require("./promptUser");

// Global variable to track if the user wants to use default settings
let useDefaultSettings = false;

async function promptUseDefaultSettings() {
  useDefaultSettings = await promptUser(
    "Would you like to use the default settings for the entire app setup?"
  );

  return useDefaultSettings;
}

// Function to check if default settings are being used
function getIsUsingDefaultSettings() {
  return useDefaultSettings;
}

module.exports = { promptUseDefaultSettings, getIsUsingDefaultSettings };
