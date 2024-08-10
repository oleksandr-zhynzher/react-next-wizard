const { readFile, writeToFile } = require("./file");

function addGitignoreRule(rule) {
  let gitignoreContent = readFile(".gitignore");

  if (!gitignoreContent.includes(rule)) {
    gitignoreContent += `\n${rule}\n`;
    writeToFile(".gitignore", "", gitignoreContent);
  }
}

module.exports = addGitignoreRule;
