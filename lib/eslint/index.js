const path = require("path");
const fs = require("fs");
const eslintPlugins = require("./eslintPlugins");
const { addParserOptions } = require("./addParserOptions");
const { updateEslintConfig } = require("./updateEslintConfig");
const { installEslintPlugins } = require("./installEslintPlugins");
const { createEslintIgnoreFile } = require("./createEslintIgnoreFile");
const { updatePackageJsonWithLintingScripts } = require("../package");
const {
  promptGetCustomEslintSettings,
  promptGetEslintDefaultSettings,
} = require("../prompts");

async function setupEslint(packageManager, projectName) {
  const appPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(appPath)) {
    console.error(`Project directory not found: ${appPath}`);
    return;
  }

  process.chdir(appPath);
  console.log("Setting up ESLint...");

  const useDefaultSettings = await promptGetEslintDefaultSettings();
  let pluginsToInstall = eslintPlugins.filter((plugin) => plugin.required);

  if (!useDefaultSettings) {
    const selectedPlugins = await promptGetCustomEslintSettings();
    pluginsToInstall = [...pluginsToInstall, ...selectedPlugins];
  } else {
    pluginsToInstall = [
      ...pluginsToInstall,
      ...eslintPlugins.filter((plugin) => !plugin.required),
    ];
  }

  installEslintPlugins(packageManager, pluginsToInstall);

  const eslintConfigPath = path.join(appPath, ".eslintrc.json");
  if (fs.existsSync(eslintConfigPath)) {
    const eslintConfig = JSON.parse(fs.readFileSync(eslintConfigPath, "utf-8"));
    updateEslintConfig(eslintConfig, pluginsToInstall);
    addParserOptions(eslintConfig);
    fs.writeFileSync(
      eslintConfigPath,
      JSON.stringify(eslintConfig, null, 2),
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
