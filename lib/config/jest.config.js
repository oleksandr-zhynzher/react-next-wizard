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
  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
};

export default createJestConfig(config);
`;

module.exports = jestConfig;
