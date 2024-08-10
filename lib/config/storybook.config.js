const storyBookJestAddonConfig = `
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";

export const decorators = [
  withTests({
    results,
  }),
];`;

module.exports = storyBookJestAddonConfig;
