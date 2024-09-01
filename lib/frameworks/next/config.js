const nextEslint = [
  {
    packageName: "",
    configProperty: "",
    value: "",
    extendsRules: ["next/core-web-vitals"],
    rules: {},
    required: true,
    label: "next/core-web-vitals - Next.js Core Web Vitals",
  },
  {
    packageName: "eslint-plugin-react-perf",
    configProperty: "plugins",
    value: "react-perf",
    extendsRules: ["plugin:react-perf/recommended"],
    rules: {},
    required: false,
    label: "eslint-plugin-react-perf - React Perf (Performance)",
  },
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
  {
    packageName: "eslint-plugin-jsx-a11y",
    configProperty: "plugins",
    value: "jsx-a11y",
    extendsRules: ["plugin:jsx-a11y/recommended"],
    rules: {},
    required: false,
    label: "eslint-plugin-jsx-a11y - JSX Accessibility (A11y)",
  },
];

module.exports = { nextEslint };
