const path = require("path");
const fs = require("fs");
const { selectEslintPlugins } = require("./prompts");
const { addParserOptions } = require("./addParserOptions");
const { updateEslintConfig } = require("./updateEslintConfig");
const { installEslintPlugins } = require("./installEslintPlugins");
const { createEslintIgnoreFile } = require("./createEslintIgnoreFile");

const { updatePackageJsonWithLintingScripts } = require("../package");

async function setupEslint(packageManager, projectName, useDefaultSettings) {
  const appPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(appPath)) {
    console.error(`Project directory not found: ${appPath}`);
    return;
  }

  process.chdir(appPath);
  console.log("Setting up ESLint...");

  const pluginsToInstall = await selectEslintPlugins(useDefaultSettings);

  installEslintPlugins(packageManager, pluginsToInstall);

  const eslintConfigPath = path.join(appPath, ".eslintrc.json");
  if (fs.existsSync(eslintConfigPath)) {
    const eslintConfig = JSON.parse(fs.readFileSync(eslintConfigPath, "utf-8"));
    addParserOptions(eslintConfig);
    const orderedEslintConfig = updateEslintConfig(
      eslintConfig,
      pluginsToInstall
    );

    fs.writeFileSync(
      eslintConfigPath,
      JSON.stringify(orderedEslintConfig, null, 2),
      "utf-8"
    );
  } else {
    console.error(
      ".eslintrc.json not found. Make sure ESLint is configured properly."
    );
  }

  updatePackageJsonWithLintingScripts(appPath);
  createEslintIgnoreFile(appPath);

  console.log("ESLint setup complete!");
}

module.exports = { setupEslint };
