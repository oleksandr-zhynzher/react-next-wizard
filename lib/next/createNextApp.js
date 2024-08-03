const { execSync } = require("child_process");
const { getNextJsOptions } = require("./prompts");

async function createNextApp(packageManager, projectName) {
  const options = await getNextJsOptions();

  const { useTailwind, useAppRouter } = options;

  let command = `${packageManager} create next-app ${projectName} --ts --eslint --src-dir --import-alias "@/*"`;

  if (useTailwind) {
    command += " --tailwind";
  }

  if (useAppRouter) {
    command += " --app";
  }

  const envVars = {
    NEXT_APP_USE_SRC_DIR: "yes",
    NEXT_APP_USE_EXPERIMENTAL_APP: useAppRouter ? "yes" : "no",
  };

  const env = { ...process.env, ...envVars };

  execSync(command, { stdio: "inherit", env });
}

module.exports = createNextApp;
