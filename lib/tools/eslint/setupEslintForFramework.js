const { setupEslintForTool } = require("./setupEslintForTool");
const { nextEslint } = require("../next/config");

const setupEslintForFramework = async () => {
  await setupEslintForTool(nextEslint);
};

module.exports = { setupEslintForFramework };
