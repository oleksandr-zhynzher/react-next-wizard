const { updateEslintConfig } = require("./setupEslintConfig");
const { installPackages } = require("../../package");
const { readFile, writeToFile } = require("../../utils/file");

async function setupEslintForTool(toolConfigs) {
  const eslintConfigFileName = ".eslintrc.json";

  // Step 1: Collect all package names and install them
  const packagesToInstall = toolConfigs
    .map((config) => config.packageName)
    .filter((packageName) => packageName);

  if (packagesToInstall.length > 0) {
    installPackages(packagesToInstall);
  }

  // Step 2: Read the current ESLint configuration
  const eslintConfigContent = JSON.parse(readFile(eslintConfigFileName));

  // Step 3: Update the ESLint configuration with the new plugin settings
  const updatedEslintConfig = updateEslintConfig(
    eslintConfigContent,
    toolConfigs
  );

  // Step 4: Write the updated ESLint configuration back to the file
  writeToFile(
    eslintConfigFileName,
    "",
    JSON.stringify(updatedEslintConfig, null, 2)
  );
}

module.exports = { setupEslintForTool };
