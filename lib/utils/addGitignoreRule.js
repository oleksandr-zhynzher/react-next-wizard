const { readFile, writeToFile } = require("./file");

function addGitignoreRule(rule) {
  let gitignoreContent = readFile(".gitignore");

  // Check if the rule already exists in .gitignore
  if (!gitignoreContent.includes(rule)) {
    gitignoreContent += `\n${rule}\n`;
    writeToFile(".gitignore", "", gitignoreContent);
    console.log(`Added "${rule}" to .gitignore.`);
  } else {
    console.log(`"${rule}" is already in .gitignore.`);
  }
}

module.exports = addGitignoreRule;
