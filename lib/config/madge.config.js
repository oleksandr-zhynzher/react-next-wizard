const madgeConfig = {
  fileExtensions: ["ts", "tsx"],
  detectiveOptions: {
    ts: {
      skipTypeImports: true,
    },
  },
  excludeRegExp: [
    "page.tsx",
    "globals.css",
    "layout.tsx",
    "stories",
    "_app.tsx",
    "_document.tsx",
    "hello.ts",
    "pages/index.tsx",
    "\\.spec\\.tsx$",
    "\\.stories\\.tsx$",
  ],
};

module.exports = madgeConfig;
