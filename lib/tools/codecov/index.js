const { setupTool } = require("../../utils");
const { codecovConfig, codecovPackages } = require("./config");

async function setupCodecov() {
  const toolName = "Codecov";

  await setupTool({
    toolName: "Codecov",
    packages: codecovPackages,
    configContent: codecovConfig,
    configFileName: "codecov.yml",
  });
}

module.exports = { setupCodecov };
