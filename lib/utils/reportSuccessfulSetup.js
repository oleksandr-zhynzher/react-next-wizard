const { logSuccess } = require("./logger");

function reportSuccessfulSetup() {
  const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
  };

  const terminalWidth = process.stdout.columns || 100; // Default to 100 if terminal width can't be determined
  const border = `${colors.fgBlue}${"=".repeat(terminalWidth)}${colors.reset}`;

  const rawMessage = `🎉     Congratulations!     🎉`;
  const messageLength = rawMessage.length;
  const centeredMessage = `${colors.fgYellow}🎉${colors.reset}     ${colors.fgGreen}${colors.bright}Congratulations!${colors.reset}     ${colors.fgYellow}🎉${colors.reset}`;
  const padding = Math.max(0, Math.floor((terminalWidth - messageLength) / 2));
  const paddedCenteredMessage = `${" ".repeat(padding)}${centeredMessage}`;

  const setupMessage = `Your application setup has been successfully completed.`;
  const setupMessageLength = setupMessage.length;
  const centeredSetupMessage = `${colors.fgGreen}${colors.bright}${" ".repeat(
    Math.max(0, Math.floor((terminalWidth - setupMessageLength) / 2))
  )}${setupMessage}${colors.reset}`;

  const message = `
${border}
${paddedCenteredMessage}

${centeredSetupMessage}

${border}
  `;

  logSuccess(message);
}

module.exports = { reportSuccessfulSetup };
