const fs = require("fs");
const path = require("path");

function writeToFile(fileName, content) {
  try {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, content, "utf-8");
  } catch (error) {
    throw new Error(`Failed to write the ${fileName} file: ${error.message}`);
  }
}

function readFile(fileName) {
  try {
    const filePath = path.join(process.cwd(), fileName);
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to read the ${fileName} file: ${error.message}`);
  }
}

module.exports = { writeToFile, readFile };
