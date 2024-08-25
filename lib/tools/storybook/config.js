const storybookJestAddonConfig = `
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import '../.storybook/storybook.css';

export const decorators = [
  withTests({
    results,
  }),
];`;

const storybookStylesConfig = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const storybookScripts = {
  storybook: "storybook dev -p 6006",
  "storybook:build": "storybook build",
  "storybook:test": "test-storybook",
};
const storybookPackages = [
  "@storybook/test-runner",
  "@storybook/addon-a11y",
  "@storybook/addon-viewport",
  "@storybook/addon-measure",
  "@storybook/addon-controls",
  "@storybook/addon-actions",
  "@storybook/addon-docs",
  "@storybook/addon-jest",
];
const storybookAddons = [
  "@storybook/addon-a11y",
  "@storybook/addon-viewport",
  "@storybook/addon-measure",
  "@storybook/addon-controls",
  "@storybook/addon-actions",
  "@storybook/addon-docs",
  "@storybook/addon-jest",
];

module.exports = {
  storybookScripts,
  storybookPackages,
  storybookAddons,
  storybookStylesConfig,
  storybookJestAddonConfig,
};
