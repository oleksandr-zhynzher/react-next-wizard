const { setupNext } = require("./next");
const { setupAngular } = require("./angular");
const { promptFramework } = require("../prompts");

async function setupFramework() {
  const framework = await promptFramework();

  switch (framework) {
    case "Angular":
      await setupAngular();
      break;
    case "Next.js":
      await setupNext();
      break;
    default:
      console.log("Unknown framework selected.");
  }
}

module.exports = {
  setupFramework,
};
