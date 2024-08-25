const { setupSnyk } = require("./snyk");
const { setupKnip } = require("./knip");
const { setupJest } = require("./jest");
const { setupNext } = require("./next");
const { setupHusky } = require("./husky");
const { setupMadge } = require("./madge");
const { setupEslint } = require("./eslint");
const { setupCypress } = require("./cypress");
const { setupCodecov } = require("./codecov");
const { setupPrettier } = require("./prettier");
const { setupDepcheck } = require("./depcheck");
const { setupStorybook } = require("./storybook");
const { setupLighthouse } = require("./lighthouse");
const { setupDependabot } = require("./dependabot");
const { setupGithubActions } = require("./github-actions");
const { setupBundleAnalyzer } = require("./bundle-analyzer");

module.exports = {
  setupSnyk,
  setupKnip,
  setupJest,
  setupNext,
  setupHusky,
  setupMadge,
  setupEslint,
  setupCypress,
  setupCodecov,
  setupPrettier,
  setupDepcheck,
  setupStorybook,
  setupLighthouse,
  setupDependabot,
  setupGithubActions,
  setupBundleAnalyzer,
};
