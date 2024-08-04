const path = require("path");
const fs = require("fs");
const { selectEslintPlugins } = require("./prompts");
const { addParserOptions } = require("./addParserOptions");
const { updateEslintConfig } = require("./updateEslintConfig");
const { installEslintPlugins } = require("./installEslintPlugins");
const { createEslintIgnoreFile } = require("./createEslintIgnoreFile");

const { getProjectName } = require("../prompts");
const { updatePackageScripts } = require("../package");

async function setupEslint() {
  const projectName = getProjectName();
  const appPath = path.join(process.cwd(), projectName);
  const eslintConfigPath = path.join(appPath, ".eslintrc.json");

  const eslintScripts = {
    lint: "next lint",
    "lint:fix": "next lint --fix",
  };

  process.chdir(appPath);

  console.log("Setting up ESLint...");

  const pluginsToInstall = await selectEslintPlugins();
  installEslintPlugins(pluginsToInstall);

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

  updatePackageScripts(appPath, eslintScripts);
  createEslintIgnoreFile(appPath);

  console.log("ESLint setup complete!");
}

module.exports = { setupEslint };
