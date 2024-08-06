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

module.exports = bundleAnalyzerConfig;
