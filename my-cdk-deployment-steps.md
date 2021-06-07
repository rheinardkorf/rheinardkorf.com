---
title: My CDK Deployment Steps
date: 2021-06-06T23:56:59.821Z
---

I have recently absolutely fallen in love with the simplicity of AWS CDK (Cloud Development Kit). Writing Infrastructure as Code is so much fun! However, each time I want to integrate CDK I repeat the same steps and face the same challenges. To avoid relearning each time... here are my steps.

The following should work for existing and new projects. Just adjust accordingly. For example, don't init if you have an existing project. Don't add Typescript if you're project already has it setup.

## Step 1 - Setup your project

```bash
# For a new project.
yarn init -y

# Add CDK core dependencies
yarn add @aws-cdk/core source-map-support

# Add CDK tool 
yarn add aws-cdk -D

# Add Typescript modules I often use 
yarn add typescript ts-jest ts-node jest @types/jest @types/node -D
```

## Step 2 - Plan your structure.
I'm keeping mine pretty simple on my projects. I know usually you will have a `lib` and `bin` if you follow tutorials. That makes no sense to me personally, so I go with a simple `infra` folder.

```bash
# From project root...
mkdir infra

# Deploy steps
touch infra/deploy.ts

# Default stack. Rename, add more, this is a base.
touch infra/stack.ts

# Most important file for CDK.
touch cdk.json

# If you don't have it already,
touch tsconfig.json
```

## Step 3 - Basic configuration and deployment scripts
First up! I am using Typescript for CDK. If you don't have it already setup, we need as a base the following: 

**tsconfig.json**
```json
{
    "compilerOptions": {
        "target": "ES2018",
        "module": "commonjs",
        "lib": ["es2018"],
        "declaration": true,
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "noImplicitThis": true,
        "alwaysStrict": true,
        "noUnusedLocals": false,
        "noUnusedParameters": false,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": false,
        "inlineSourceMap": true,
        "inlineSources": true,
        "experimentalDecorators": true,
        "strictPropertyInitialization": false,
        "typeRoots": ["./node_modules/@types"]
    },
    "exclude": ["cdk.out"]
}
```




