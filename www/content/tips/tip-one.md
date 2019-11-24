---
title: This is Tip One.
---

## Code Block Examples

Simple Mermaid

```mermaid
graph LR
mermaid[Mermaid Example]
mermaid --> next[Next Item]
next --> learn[Go learn Mermaid]
```

```mermaid
graph LR
Systemstart-->SomeIcon[Moo]
```

Decision Tree

```mermaid
graph TD
A[Mermaid] -->|Find Links| B(Learn lots)
B --> C{This is awesome}
C -->|uhhh| D[Not sold]
C -->|hmmm| E[Neat]
C -->|yess| F[Will use!]
```

Grabbed some code fromt he Gatsby docs...

```javascript{numberLines: false}
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            // We don't need to add the matching ExtractText plugin
            // because gatsby already includes it and makes sure its only
            // run at the appropriate stages, e.g. not in development
            loaders.miniCssExtract(),
            loaders.css({ importLoaders: 1 }),
            // the postcss loader comes with some nice defaults
            // including autoprefixer for our configured browsers
            loaders.postcss(),
            `less-loader`,
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}
```