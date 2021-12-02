---
title: Building APIs with CDK and Swagger
date: 2021-10-19T16:11:42+1100
hidden: true
---

```bash
git init
git branch -m master main
yarn init -y
```

package.json
```json
{
  "name": "monorepo",
  "license": "MIT",
  "private": true,
  "workspaces": [
      "packages/*"
  ]
}
```

```bash
yarn workspaces info
# output: {}
mkdir -p packages/api packages/db
touch packages/api/.gitkeep packages/db/.gitkeep
```

VSCode Extension: `gitignore` 



