const bundleAnalyzerConfig = `import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer({});
`;

const bundleAnalyzerScripts = {
  analyze: "ANALYZE=true next build",
};

const bundleAnalyzerPackages = ["@next/bundle-analyzer"];

module.exports = {
  bundleAnalyzerConfig,
  bundleAnalyzerPackages,
  bundleAnalyzerScripts,
};
