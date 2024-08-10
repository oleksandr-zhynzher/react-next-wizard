const { setupTool } = require("../utils");
const {
  bundleAnalyzerConfig,
  bundleAnalyzerPackages,
  bundleAnalyzerScripts,
} = require("../config/bundleAnalyzer.config");

async function setupBundleAnalyzer() {
  const toolName = "Bundle Analyzer";

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: bundleAnalyzerPackages,
    scripts: bundleAnalyzerScripts,
    configFileName: "next.config.mjs",
    configContent: bundleAnalyzerConfig,
  });
}

module.exports = { setupBundleAnalyzer };
