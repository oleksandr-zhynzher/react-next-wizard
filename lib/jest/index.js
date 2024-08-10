const { jestConfig } = require("../config");
const { setupTool, addGitignoreRule } = require("../utils");

async function setupJest() {
  const toolName = "Jest";
  const testResultsFileName = ".jest-test-results.json";
  const packages = [
    "jest",
    "jest-environment-jsdom",
    "@testing-library/react",
    "@testing-library/dom",
    "@testing-library/jest-dom",
    "ts-node",
  ];
  const scripts = {
    test: "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:generate-output": `jest --json --outputFile=${testResultsFileName}`,
    "test:generate-output:watch": `jest --json --outputFile=${testResultsFileName} --watch`,
  };

  addGitignoreRule(testResultsFileName);

  await setupTool({
    toolName: toolName,
    promptMessage: `Would you like to add ${toolName} to your project?`,
    packages,
    scripts,
    configFileName: "jest.config.ts",
    configContent: jestConfig,
  });
}

module.exports = { setupJest };
