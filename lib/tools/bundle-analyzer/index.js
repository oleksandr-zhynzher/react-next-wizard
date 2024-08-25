const { setupTool } = require("../../utils");
const {
  bundleAnalyzerConfig,
  bundleAnalyzerPackages,
  bundleAnalyzerScripts,
} = require("./config");

async function setupBundleAnalyzer() {
  await setupTool({
    toolName: "Bundle Analyzer",
    packages: bundleAnalyzerPackages,
    scripts: bundleAnalyzerScripts,
    configFileName: "next.config.mjs",
    configContent: bundleAnalyzerConfig,
  });
}

module.exports = { setupBundleAnalyzer };
