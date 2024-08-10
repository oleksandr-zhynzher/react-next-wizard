const { getPackageManager } = require("../prompts");

const packageManager = getPackageManager();

const lighthouseConfig = {
  ci: {
    collect: {
      startServerCommand: `${packageManager} run start`,
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
    server: {},
  },
};

const lighthouseScripts = {
  lighthouse: "lhci autorun",
};

const lighthousePackages = ["@lhci/cli"];

module.exports = { lighthouseConfig, lighthouseScripts, lighthousePackages };
