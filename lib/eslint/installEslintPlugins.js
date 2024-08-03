const { execSync } = require('child_process');

function installEslintPlugins(packageManager, eslintPlugins) {
  const packages = eslintPlugins
    .map(plugin => plugin.packageName)
    .filter(packageName => packageName)
    .join(' ');

  if (packages) {
    execSync(`${packageManager} add -D ${packages}`, { stdio: 'inherit' });
  }
}

module.exports = { installEslintPlugins };
