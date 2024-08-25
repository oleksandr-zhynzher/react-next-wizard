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

module.exports = { prettierConfig, prettierScripts, prettierPackages };
