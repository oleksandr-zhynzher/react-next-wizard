#!/usr/bin/env node

const { getProjectName, getPackageManager } = require("../lib/prompts");
const { createNextApp } = require("../lib/next");
const { setupPackageManager, setupNodeVersion } = require("../lib/package");
const { setupEslint } = require("../lib/eslint");

async function main() {
  try {
    const projectName = await getProjectName();
    const packageManager = await getPackageManager();
    await createNextApp(packageManager, projectName);
    setupNodeVersion(projectName);
    setupPackageManager(projectName, packageManager);
    setupEslint(packageManager, projectName);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
