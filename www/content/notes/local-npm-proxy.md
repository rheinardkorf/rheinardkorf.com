---
title: Keeping a local cache of NPM packages.
seoDescription: Sometimes when you have large dependencies (e.g. Chromium) its nice to save some bandwidth. Even nicer if you can run npm while offline.
---

I often work with NPM packages that have many dependencies. Usually I'm ok with letting `npm` just do its thing, but when recently introduced to [Playwright](https://github.com/microsoft/playwright) the idea of having to download all the headless browsers for experimentation seems tedious. Thankfully! I remembered about a package called [local-npm](https://www.npmjs.com/package/local-npm), which sets up an `npm` proxy server. It also works offline!

## Install local-npm

```bash
npm install -g local-npm
```

## Run the server

```bash
# Inside directory where you want to cache the files.
local-npm
```

## Point npm at the local proxy

```bash
npm set registry http://127.0.0.1:5080
```

If you ever need to switch back run this command:

```bash
npm set registry https://registry.npmjs.org
```

**BONUS:** If you are on a Mac check out [local-npm-launch-agent](https://github.com/local-npm/local-npm-launch-agent) to automate some of this.
