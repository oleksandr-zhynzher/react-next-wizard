#!/usr/bin/env node

const {
  getPackageManager,
  getProjectName,
  getNextJsOptions,
} = require("../lib/prompts");
const createNextApp = require("../lib/createApp");
const addAdditionalConfigurations = require("../lib/configureApp");
const setupPackageManager = require("../lib/setupPackageManager");
const setupNodeVersion = require("../lib/setupNodeVersion");

async function main() {
  try {
    const projectName = await getProjectName();
    const packageManager = await getPackageManager();
    const options = await getNextJsOptions();
    createNextApp(packageManager, projectName, options);
    setupNodeVersion(projectName);
    setupPackageManager(projectName, packageManager);
    addAdditionalConfigurations(packageManager, projectName);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
