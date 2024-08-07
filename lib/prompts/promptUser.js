const { promptAgreement } = require("./promptAgreement");
const { getIsUsingDefaultSettings } = require("./promptUseDefaultSettings");

async function promptUser(message) {
  return getIsUsingDefaultSettings() ? true : await promptAgreement(message);
}

module.exports = { promptUser };
