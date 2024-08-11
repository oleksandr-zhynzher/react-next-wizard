const { bundleAnalyzerPackages } = require("./bundleAnalyzer.config");
const { jestPackages } = require("./jest.config");
const { prettierPackages } = require("./prettier.config");
const { storybookPackages } = require("./storybook.config");
const { codecovPackages } = require("./codecov.config");

const depcheckConfig = {
  ignores: [
    "eslint",
    "@types/node",
    "@types/react",
    "@types/react-dom",
    "@typescript-eslint/scope-manager",
    "postcss",
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/blocks",
    "@types/eslint-plugin-security",
    "@types/webpack-bundle-analyzer",
    ...codecovPackages,
    ...jestPackages,
    ...prettierPackages,
    ...storybookPackages,
    ...bundleAnalyzerPackages,
  ],
};

const depcheckScripts = { depcheck: "depcheck" };

const depcheckPackages = ["depcheck"];

module.exports = { depcheckConfig, depcheckScripts, depcheckPackages };
