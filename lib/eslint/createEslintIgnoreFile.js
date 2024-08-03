const fs = require("fs");
const path = require("path");

function createEslintIgnoreFile(appPath) {
  const eslintIgnorePath = path.join(appPath, ".eslintignore");
  const eslintIgnoreContent = `
# Ignore node_modules folder
node_modules/

# Ignore build output directories
.next/
out/

# Ignore public folder (static files)
public/

# Ignore specific config files
*.config.js

# Ignore environmental files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Ignore coverage output
coverage/

# Ignore Docker related files
Dockerfile
.dockerignore

# Ignore Vercel/Netlify configuration files
vercel.json
netlify.toml

# Ignore lock files
yarn.lock
package-lock.json

# Ignore specific file types (if needed)
*.min.js
*.map

# Ignore storybook files (if using Storybook)
.storybook/
stories/

# Ignore next.js types for TypeScript
next-env.d.ts
`;

  fs.writeFileSync(eslintIgnorePath, eslintIgnoreContent.trim(), "utf-8");
}

module.exports = { createEslintIgnoreFile };
