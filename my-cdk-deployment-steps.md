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

Deployment (part 1 of 3). I set some CDK context I use often as well.

**cdk.json**
```json
{
    "app": "npx ts-node --prefer-ts-exts infra/deploy.ts",
    "context": {
        "@aws-cdk/core:enableStackNameDuplicates": "true",
        "aws-cdk:enableDiffNoFail": "true",
        "@aws-cdk/core:stackRelativeExports": "true",
        "@aws-cdk/aws-ecs-patterns:removeDefaultDesiredCount": true
    }
}
```

Deployment (part 2 of 3). We are referencing our deploy.ts file, but lets first focus on our Node scripts. Add this to `scripts` in `package.json`. (Technically, you shouln't need `cdk bootstrap` in there on each deploy, but I do it as this is also my deploy script for CI/CD).

**package.json**
```json
...
"scripts": {
    "cdk": "cdk",
    "deploy": "cdk bootstrap && cdk deploy --require-approval never --outputs-file cdk.out.json",
    "destroy": "cdk destroy --force"
}
...
```

Deployment (part 3 of 3). Now we can get CDK to load and deploy the stack (or stacks).

**infra/deploy.ts** 
```typescript
#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyAppStack } from './stack';

const stage = process.env.STAGE || 'dev';
const stackId = 'TestApp-' + stage ;
const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION || 'ap-southeast-2';

const app = new cdk.App();
new MyAppStack(app, stackId, {
  env: {
    account,
    region,
  },
  description: `Deploying TestApp (${stage})`
});
```

Finally, lets setup the skeleton for our Stack.

**infra/stack.ts**
```typescript
import * as cdk from '@aws-cdk/core';

const stage = process.env.STAGE || 'dev';

export class MyAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  }
}
```

## Step 4 - Write your Infrastructure
You can now start writing all your infrastructure in your `infra/stack.ts` file. Over time you may add multiple stacks, but this file is sufficient for small and big stacks; and if you're learning, this gives you a very clean place to start from.

## Step 5 - Deploy and Destroy!
Once you're happy with your stack you can run `cdk synth` to validate your stack. If you have no errors, go ahead and `yarn deploy`. If you're done testing or you're feeling destructive, you can run `yarn destroy`.

**NOTE:** `cdk destroy` fails at the moment for `lambda@edge` resources. Don't worry, CDK will mark the resources for deletion and they will eventually just disappear. But, should you feel concerned, head over to your AWS Console in `us-east-1` and remove the Lambda functions manually.