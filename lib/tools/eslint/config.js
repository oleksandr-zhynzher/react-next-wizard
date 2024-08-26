const eslintPluginsConfig = [
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
];

const eslintScripts = {
  lint: "next lint",
  "lint:fix": "next lint --fix",
};

module.exports = { eslintScripts, eslintPluginsConfig };
