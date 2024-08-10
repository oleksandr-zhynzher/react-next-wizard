const cypressPackages = ["cypress"];

const cypressScripts = {
  "test:e2e": "cypress run",
  "test:e2e:open": "cypress open",
};
const cypressConfig = `const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
`;

const cypressSupportConfig = `// Cypress support file
// You can add custom commands or other initialization code here.

import './commands'; // Example: importing custom commands
`;

module.exports = {
  cypressConfig,
  cypressScripts,
  cypressPackages,
  cypressSupportConfig,
};
