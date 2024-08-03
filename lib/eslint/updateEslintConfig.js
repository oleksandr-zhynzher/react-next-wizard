function updateEslintConfig(eslintConfig, eslintPlugins) {
  eslintPlugins.forEach(({ configProperty, value, extendsRules, rules }) => {
    if (configProperty && value) {
      addToEslintConfigArray(eslintConfig, configProperty, value);
    }
    if (Array.isArray(extendsRules)) {
      extendsRules.forEach((rule) =>
        addToEslintConfigArray(eslintConfig, "extends", rule)
      );
    }
    if (rules && typeof rules === "object") {
      eslintConfig.rules = {
        ...eslintConfig.rules,
        ...rules,
      };
    }
  });

  // Remove duplicate entries
  eslintConfig.plugins = [...new Set(eslintConfig.plugins || [])];
  eslintConfig.extends = [...new Set(eslintConfig.extends || [])];
}

function addToEslintConfigArray(eslintConfig, property, value) {
  if (!value) return;
  if (!Array.isArray(eslintConfig[property])) {
    eslintConfig[property] = [];
  }
  eslintConfig[property].push(value);
}

module.exports = { updateEslintConfig };
