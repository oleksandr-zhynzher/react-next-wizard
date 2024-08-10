const eslintPluginsConfig = [
  // Required: Standard Next.js ESLint configuration
  {
    packageName: "",
    configProperty: "",
    value: "",
    extendsRules: ["next/core-web-vitals"],
    rules: {},
    required: true,
    label: "next/core-web-vitals - Next.js Core Web Vitals",
  },
  // Required: TypeScript linting
  {
    packageName:
      "@typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/scope-manager",
    configProperty: "plugins",
    value: "@typescript-eslint",
    extendsRules: [
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    required: true,
    label: "@typescript-eslint - TypeScript Support",
  },
  // Optional: Code quality and best practices plugins
  {
    packageName: "eslint-plugin-sonarjs",
    configProperty: "plugins",
    value: "sonarjs",
    extendsRules: ["plugin:sonarjs/recommended-legacy"],
    rules: {},
    required: false,
    label: "eslint-plugin-sonarjs - SonarJS (Code Quality)",
  },
  {
    packageName: "eslint-plugin-unicorn",
    configProperty: "plugins",
    value: "unicorn",
    extendsRules: ["plugin:unicorn/recommended"],
    rules: {},
    required: false,
    label: "eslint-plugin-unicorn - Unicorn (Best Practices)",
  },
  // Optional: Security Plugins
  {
    packageName: "eslint-plugin-security",
    configProperty: "plugins",
    value: "security",
    extendsRules: ["plugin:security/recommended-legacy"],
    rules: {},
    required: false,
    label: "eslint-plugin-security - Security (Common Vulnerabilities)",
  },
  {
    packageName: "eslint-plugin-no-unsanitized",
    configProperty: "plugins",
    value: "no-unsanitized",
    extendsRules: ["plugin:no-unsanitized/DOM"],
    rules: {},
    required: false,
    label: "eslint-plugin-no-unsanitized - No Unsanitized (Security)",
  },
  // Optional: Import Plugins
  {
    packageName: "eslint-plugin-import",
    configProperty: "plugins",
    value: "import",
    extendsRules: ["plugin:import/recommended"],
    rules: {
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
    required: false,
    label: "eslint-plugin-import - Import (Order & Rules)",
  },
  {
    packageName: "eslint-plugin-unused-imports",
    configProperty: "plugins",
    value: "unused-imports",
    extendsRules: [],
    rules: {},
    required: false,
    label: "eslint-plugin-unused-imports - Unused Imports",
  },
  {
    packageName: "eslint-plugin-simple-import-sort",
    configProperty: "plugins",
    value: "simple-import-sort",
    extendsRules: [],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    required: false,
    label: "eslint-plugin-simple-import-sort - Simple Import Sort",
  },
  {
    packageName: "eslint-plugin-deprecation",
    configProperty: "plugins",
    value: "deprecation",
    extendsRules: ["plugin:deprecation/recommended"],
    rules: {},
    required: false,
    label: "eslint-plugin-deprecation - Deprecation (Deprecated APIs)",
  },
  // Optional: Performance Plugin
  {
    packageName: "eslint-plugin-react-perf",
    configProperty: "plugins",
    value: "react-perf",
    extendsRules: ["plugin:react-perf/recommended"],
    rules: {},
    required: false,
    label: "eslint-plugin-react-perf - React Perf (Performance)",
  },
  // Optional: React Plugins
  {
    packageName: "eslint-plugin-react-refresh",
    configProperty: "plugins",
    value: "react-refresh",
    extendsRules: [],
    rules: {
      "react-refresh/only-export-components": "warn",
    },
    required: false,
    label: "eslint-plugin-react-refresh - React Refresh (Hot Reload)",
  },
  // Optional: JSX Accessibility Plugin
  {
    packageName: "eslint-plugin-jsx-a11y",
    configProperty: "plugins",
    value: "jsx-a11y",
    extendsRules: ["plugin:jsx-a11y/recommended"],
    rules: {},
    required: false,
    label: "eslint-plugin-jsx-a11y - JSX Accessibility (A11y)",
  },
  // Prettier
  {
    packageName: "eslint-config-prettier eslint-plugin-prettier",
    configProperty: "plugins",
    value: "prettier",
    extendsRules: ["plugin:prettier/recommended"],
    rules: {},
    required: true,
    label: "eslint-plugin-prettier - Prettier",
  },
  // Storybook
  // TO DO: Add adding of lint for storybook from storybook/index.js
  {
    packageName: "eslint-plugin-storybook",
    configProperty: "plugins",
    value: "prettier",
    extendsRules: ["plugin:storybook/recommended"],
    rules: {},
    required: true,
    label: "Storybook - Linting For Storybook",
  },
  // Jest
  // TO DO: Add adding of lint for storybook from jest/index.js
  {
    packageName: "eslint-plugin-jest",
    configProperty: "plugins",
    value: "jest",
    extendsRules: ["plugin:jest/recommended"],
    rules: {},
    required: true,
  },
  {
    packageName: "eslint-plugin-jest-dom",
    configProperty: "plugins",
    value: "jest-dom",
    extendsRules: ["plugin:jest-dom/recommended"],
    rules: {},
    required: true,
  },
  {
    packageName: "eslint-plugin-jest-formatting",
    configProperty: "plugins",
    value: "jest-formatting",
    extendsRules: ["plugin:jest-formatting/recommended"],
    rules: {},
    required: true,
  },
  {
    packageName: "eslint-plugin-testing-library",
    configProperty: "plugins",
    value: "testing-library",
    extendsRules: ["plugin:testing-library/react"],
    rules: {},
    required: true,
  },
];

module.exports = eslintPluginsConfig;
