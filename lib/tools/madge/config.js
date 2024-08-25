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

const madgeScripts = {
  "madge:check-circular-deps": "madge --circular src",
  "madge:generate-dependency-graph": "madge --image graph.svg src",
};

const madgePackages = ["madge"];

module.exports = { madgeConfig, madgeScripts, madgePackages };
