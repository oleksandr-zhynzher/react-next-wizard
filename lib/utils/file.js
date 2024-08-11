const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function writeToFile(fileName, folder = "", content) {
  try {
    if (folder && !fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

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

// Function to delete the src folder
function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  } else {
    console.error(`Folder not found: ${folderPath}`);
  }
}

// Function to copy the src folder
function copyFolder(src, dest) {
  exec(`cp -r ${src} ${dest}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error copying folder: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
  });
}

module.exports = { writeToFile, readFile, deleteFolder, copyFolder };
