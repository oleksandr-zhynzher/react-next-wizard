const { setupEslintForTool } = require("./setupEslintForTool");

const setupEslintForFramework = async () => {
  await setupEslintForTool({});
};

module.exports = { setupEslintForFramework };
