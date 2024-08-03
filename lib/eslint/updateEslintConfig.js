function updateEslintConfig(eslintConfig, pluginsToInstall) {
  // Initialize properties if they don't exist and ensure correct types
  eslintConfig.plugins = Array.isArray(eslintConfig.plugins)
    ? eslintConfig.plugins
    : [];
  eslintConfig.extends = Array.isArray(eslintConfig.extends)
    ? eslintConfig.extends
    : [];
  eslintConfig.rules =
    typeof eslintConfig.rules === "object" && eslintConfig.rules !== null
      ? eslintConfig.rules
      : {};
  eslintConfig.parser = eslintConfig.parser || undefined;
  eslintConfig.parserOptions = eslintConfig.parserOptions || undefined;

  // Add the plugins and extends rules from the selected plugins
  pluginsToInstall.forEach(({ configProperty, value, extendsRules, rules }) => {
    if (configProperty === "plugins" && value) {
      eslintConfig.plugins.push(value);
    }
    if (Array.isArray(extendsRules)) {
      eslintConfig.extends.push(...extendsRules);
    }
    if (rules && typeof rules === "object") {
      eslintConfig.rules = {
        ...eslintConfig.rules,
        ...rules,
      };
    }
  });

  // Remove duplicates
  eslintConfig.plugins = [...new Set(eslintConfig.plugins)];
  eslintConfig.extends = [...new Set(eslintConfig.extends)];

  // Create a new ordered config object with explicit order
  const orderedEslintConfig = {
    parser: eslintConfig.parser,
    parserOptions: eslintConfig.parserOptions,
    plugins: eslintConfig.plugins.length ? eslintConfig.plugins : undefined,
    extends: eslintConfig.extends.length ? eslintConfig.extends : undefined,
    rules: Object.keys(eslintConfig.rules).length
      ? eslintConfig.rules
      : undefined,
  };

  // Remove undefined properties
  Object.keys(orderedEslintConfig).forEach(
    (key) =>
      orderedEslintConfig[key] === undefined && delete orderedEslintConfig[key]
  );

  return orderedEslintConfig;
}

module.exports = { updateEslintConfig };
