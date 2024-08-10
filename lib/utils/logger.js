// logger.js

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  fgBlue: "\x1b[34m",
  fgGreen: "\x1b[32m",
  fgRed: "\x1b[31m",
  fgYellow: "\x1b[33m",
};

const symbols = {
  info: `${colors.fgYellow}🛠️${colors.reset}`, // Yellow Hammer and Wrench for info
  success: `${colors.fgGreen}✔️${colors.reset}`, // Green checkmark for success
  error: `${colors.fgRed}✖️${colors.reset}`, // Red cross for error
};

function logInfo(message) {
  console.log(
    `${symbols.info} ${colors.fgBlue}${colors.bright}${message}${colors.reset}`
  );
}

function logSuccess(message) {
  console.log(
    `${symbols.success} ${colors.fgGreen}${colors.bright}${message}${colors.reset}`
  );
}

function logError(message, error) {
  console.error(
    `${symbols.error} ${colors.fgRed}${colors.bright}${message}${colors.reset}`,
    error
  );
}

module.exports = {
  logInfo,
  logSuccess,
  logError,
};
