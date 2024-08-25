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
  ],
};

const depcheckScripts = { depcheck: "depcheck" };

const depcheckPackages = ["depcheck"];

module.exports = { depcheckConfig, depcheckScripts, depcheckPackages };
