const prettierConfig = {
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  jsxSingleQuote: true,
  printWidth: 80,
};

const prettierScripts = {
  prettier: "prettier '**/*.{js,jsx,ts,tsx}' --check",
  "prettier:fix": "prettier '**/*.{js,jsx,ts,tsx}' --write",
};

const prettierPackages = [
  "prettier",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
];

const prettierEslint = [
  {
    packageName: "eslint-config-prettier eslint-plugin-prettier",
    configProperty: "plugins",
    value: "prettier",
    extendsRules: ["plugin:prettier/recommended"],
    rules: {},
    required: true,
    label: "eslint-plugin-prettier - Prettier",
  },
];

module.exports = {
  prettierConfig,
  prettierEslint,
  prettierScripts,
  prettierPackages,
};
