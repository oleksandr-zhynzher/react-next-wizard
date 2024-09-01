const tailwindStylesConfig = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const storybookAddons = [
  "@storybook/addon-a11y",
  "@storybook/addon-viewport",
  "@storybook/addon-measure",
  "@storybook/addon-controls",
  "@storybook/addon-actions",
  "@storybook/addon-docs",
  "@storybook/addon-jest",
];

const storybookEslint = [
  {
    packageName: "eslint-plugin-storybook",
    configProperty: "plugins",
    extendsRules: ["plugin:storybook/recommended"],
    rules: {},
    required: true,
    label: "Storybook - Linting For Storybook",
  },
];

module.exports = {
  storybookAddons,
  storybookEslint,
  tailwindStylesConfig,
};
