// index.js
const fs = require("fs");
const path = require("path");
const { bundleAnalyzerConfig } = require("../config");

async function modifyNextConfig(appPath) {
  const nextConfigPath = path.join(appPath, "next.config.mjs");

  // Check if the file exists
  if (!fs.existsSync(nextConfigPath)) {
    console.error("next.config.mjs file not found.");
    return;
  }

  fs.writeFileSync(nextConfigPath, bundleAnalyzerConfig, "utf-8");
}

module.exports = { modifyNextConfig };
