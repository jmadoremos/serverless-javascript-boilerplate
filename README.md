# Serverless for NodeJS (JavaScript)

![Build (Ubuntu)](https://github.com/jmadoremos/serverless-javascript-boilerplate/workflows/Build%20(Ubuntu)/badge.svg?branch=main) ![Build (Windows)](https://github.com/jmadoremos/serverless-javascript-boilerplate/workflows/Build%20(Windows)/badge.svg?branch=main) ![Build (macOS)](https://github.com/jmadoremos/serverless-javascript-boilerplate/workflows/Build%20(macOS)/badge.svg?branch=main) ![Quality Check](https://github.com/jmadoremos/serverless-javascript-boilerplate/workflows/Quality%20Check/badge.svg?branch=main)

A [Serverless Framework](https://github.com/serverless/serverless) boilerplate for NodeJS using JavaScript that includes webpack support, unit testing using mocha, linting using eslint, and task automation using gulp.

**Supported Versions**

* NodeJS: 10.x, 12.x, 14.x

* Serverless: 2.x

**Capabilities**

* Basic configurations to get started with AWS using Serverless Framework.

* AWS IAM-based security control to create, manage and remove services and infrastructure components.

* Separate CloudFormation stack to prepare for Serverless Framework deployment by creating the necessary IAM User and basic CloudFormation Role that the primary CloudFormation stack will utilize; all with the least privilege.

* Optimized bundles using [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) which can be further extended to support babel and typescript.

* Local development using [serverless-offline](https://github.com/dherault/serverless-offline) to simulate AWS Lambda and AWS API Gateway behavior.

* Pre-configured with unit tests using [mocha](https://github.com/mochajs/mocha), [chai](https://github.com/chaijs/chai) and [sinon](https://github.com/sinonjs/sinon), code coverage in cobertura format using [nyc](https://github.com/istanbuljs/nyc), and  reporting in junit format.

* Pre-configured with code quality rules (i.e., linting) using [eslint](https://github.com/eslint/eslint).

## Table of Contents

* [Getting Started](./docs/README.md)

* [Security Policy](./docs/SECURITY.md)

* [Contributor Covenant Code of Conduct](./docs/CODE_OF_CONDUCT.md)

* [Contributions](./docs/CONTRIBUTING.md)
