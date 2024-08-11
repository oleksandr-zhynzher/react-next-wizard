const { getNodeVersion } = require("../package");

const githubActionsConfig = `
name: CI

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

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '${getNodeVersion().substring(1, 3)}'

      - name: Install dependencies
        run: npm install

      - name: Run build
        run: npm build

      - name: Lint code
        run: npm lint

      - name: Run tests
        run: npm test
`;

module.exports = {
  githubActionsConfig,
};
