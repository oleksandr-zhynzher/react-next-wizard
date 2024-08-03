function addParserOptions(eslintConfig) {
  eslintConfig.parser = "@typescript-eslint/parser";
  eslintConfig.parserOptions = {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  };
}

module.exports = { addParserOptions };
