const { getNodeVersion } = require("../../package");
const { getPackageManager } = require("../../prompts");

const packageManager = getPackageManager();

const githubActionsConfig = `name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '${getNodeVersion().substring(1, 3)}'

      - name: Install Dependencies
        run: ${packageManager} install

      - name: Run Build
        run: ${packageManager} run build

      - name: Lint Code
        run: ${packageManager} run lint

      - name: Check Code With Prettier
        run: ${packageManager} run prettier

      - name: Run Unit Tests
        run: ${packageManager} run test:coverage

      - name: Upload Coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          token: \${{ secrets.CODECOV_TOKEN }}
          files: ./coverage/lcov.info
          flags: unittests
          name: codecov-umbrella
          fail_ci_if_error: true

      - name: Check Unused Dependencies
        run: ${packageManager} run depcheck

      - name: Check Circular Dependencies
        run: ${packageManager} run madge:check-circular-deps

      - name: Run Lighthouse audit
        run: ${packageManager} lighthouse

      - name: Run Chromatic
        run: |
          ${packageManager} test:generate-output 
          npx chromatic --project-token=\${{ secrets.CHROMATIC_PROJECT_TOKEN }} --exit-zero-on-changes

      - name: Snyk Security Scan
        env:
          SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
        run: |
          ${packageManager} run snyk:auth $SNYK_TOKEN
          ${packageManager} run snyk:test

`;

module.exports = {
  githubActionsConfig,
};
