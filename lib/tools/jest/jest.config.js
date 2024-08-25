// New content for next.config.mjs
const jestConfig = `
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);
`;

const jestTestResultsFileName = ".jest-test-results.json";

const jestPackages = [
  "jest",
  "jest-environment-jsdom",
  "@testing-library/react",
  "@testing-library/dom",
  "@testing-library/jest-dom",
  "@types/jest",
  "ts-node",
];
const jestScripts = {
  test: "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "test:generate-output": `jest --json --outputFile=${jestTestResultsFileName}`,
  "test:generate-output:watch": `jest --json --outputFile=${jestTestResultsFileName} --watch`,
};

module.exports = {
  jestConfig,
  jestPackages,
  jestScripts,
  jestTestResultsFileName,
};
