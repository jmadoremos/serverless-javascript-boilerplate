# Getting Started

## Requirements

Before getting started to use `serverless-javascript-boilerplate`, you need to complete the following:

* Install [NodeJS](https://nodejs.org/en/download/).

* Install Serverless Framework (requires `npm`).

```shell
npm install serverless --global
```

* Register for an account in AWS, and install and configure AWS CLI locally.

> Refer to [this](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/) page for instructions.

## Installation

To install the boilerplate, follow these instructions:

> The `$PROJECT_NAME` refers to the name for the new project.

1. Install the boilerplate using Serverless Framework.

```shell
serverless install --url https://github.com/jmadoremos/serverless-javascript-boilerplate.git --name $PROJECT_NAME
```

2. Install the boilerplate's dependencies.

```shell
# navigate to the project
cd $PROJECT_NAME

# install project dependencies
npm install
```

## Basic Commands

The following are the basic commands used in the boilerplate:

* To start running the boilerplate.

```shell
npm start
```

* To run the unit tests (without code coverage).

```shell
npm test
```

* To run the unit tests (with code coverage).

```shell
npm run test-coverage
```

* To generate a test report in junit format.

```shell
npm run test-report
```

* To run the code quality rules.

```shell
npm run lint
```

* To run the code quality rules and automatically fix the coverable issues.

```shell
npm run lint-fix
```
 * To generate the serverless artifacts for publishing and deployment.

 ```shell
npm run package
 ```
