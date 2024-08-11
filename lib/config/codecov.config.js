// New content for next.config.mjs
const codecovConfig = `codecov:
  max_retries: 3

coverage:
  status:
    patch:
      default:
        target: 80%
        threshold: 1%
        base: auto
    project:
      default:
        target: 80%
        threshold: 1%
        base: auto

  threshold: 80%

ignore:
  - "node_modules"
  - "tests"
  - "mocks"
  - "dist"
  - "build"

paths:
  - "./coverage"`;

const codecovPackages = ["codecov"];

module.exports = {
  codecovConfig,
  codecovPackages,
};
