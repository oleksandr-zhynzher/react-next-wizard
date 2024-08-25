const snykPackages = ["snyk"];
const snykScripts = {
  "snyk:auth": "snyk auth",
  "snyk:test": "snyk test",
  "snyk:monitor": "snyk monitor",
};

module.exports = {
  snykScripts,
  snykPackages,
};
