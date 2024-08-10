const huskyPackages = ["husky", "lint-staged"];

const huskyConfig = `npx lint-staged`;

const huskyLintStagedConfig = {
  "**/*.{js,jsx,ts,tsx}": ["eslint", "prettier --check"],
};

module.exports = {
  huskyConfig,
  huskyPackages,
  huskyLintStagedConfig,
};
