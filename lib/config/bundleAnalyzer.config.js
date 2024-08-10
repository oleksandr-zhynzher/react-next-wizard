// New content for next.config.mjs
const bundleAnalyzerConfig = `/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer({
  // your existing configuration here
});
`;

const bundleAnalyzerScripts = {
  analyze: "ANALYZE=true next build",
};

const bundleAnalyzerPackages = [
  "webpack-bundle-analyzer",
  "@next/bundle-analyzer",
];

module.exports = {
  bundleAnalyzerConfig,
  bundleAnalyzerPackages,
  bundleAnalyzerScripts,
};
