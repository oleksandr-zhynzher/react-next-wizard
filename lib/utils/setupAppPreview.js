const path = require("path");
const { copyFolder, deleteFolder } = require("./file");

function setupAppPreview() {
  // Define paths
  const srcPath = path.join(process.cwd(), "src");
  const staticSrcPath = path.join(__dirname, "..", "static", "src");
  // Delete the existing src folder
  deleteFolder(srcPath);

  // Copy the src folder from static/src
  copyFolder(staticSrcPath, srcPath);
}

module.exports = {
  setupAppPreview,
};
