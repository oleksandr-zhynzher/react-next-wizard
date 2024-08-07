const { setupTool } = require("../utils");
const { bundleAnalyzerConfig } = require("../config");

async function setupBundleAnalyzer() {
  const toolName = "Bundle Analyzer";
  const bundleAnalyzerScripts = {
    analyze: "ANALYZE=true next build",
  };

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages: ["webpack-bundle-analyzer", "@next/bundle-analyzer"],
    configFileName: "next.config.mjs",
    configContent: bundleAnalyzerConfig,
    scripts: bundleAnalyzerScripts,
  });
}

module.exports = { setupBundleAnalyzer };
