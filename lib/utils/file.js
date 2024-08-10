const fs = require("fs");
const path = require("path");

function writeToFile(fileName, folder = "", content) {
  try {
    const filePath = path.join(process.cwd(), folder, fileName);
    fs.writeFileSync(filePath, content, "utf-8");
  } catch (error) {
    throw new Error(
      `Failed to write the ./${folder ? folder + "/" : ""}${fileName} file: ${
        error.message
      }`
    );
  }
}

function readFile(fileName, folder = "") {
  try {
    const filePath = path.join(process.cwd(), folder, fileName);
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    throw new Error(
      `Failed to write the ./${folder ? folder + "/" : ""}${fileName} file: ${
        error.message
      }`
    );
  }
}

module.exports = { writeToFile, readFile };
