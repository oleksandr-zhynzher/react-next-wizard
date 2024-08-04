const madgeConfig = {
  fileExtensions: ['ts', 'tsx'],
  detectiveOptions: {
    ts: {
      skipTypeImports: true,
    },
  },
  excludeRegExp: ['page.tsx', 'globals.css', 'layout.tsx'],
};

module.exports = madgeConfig;
