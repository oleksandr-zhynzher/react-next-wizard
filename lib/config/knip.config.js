const knipConfig = {
  entry: ["src/pages/_app.tsx"],
  project: ["**/*.{js,ts,tsx}"],
};

const knipScripts = { knip: "knip" };

const knipPackages = ["knip"];

module.exports = { knipConfig, knipScripts, knipPackages };
