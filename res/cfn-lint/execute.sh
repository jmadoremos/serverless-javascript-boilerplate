#!/bin/bash

# ! Execute at the root directory of this
# ! git repository. Call this using
# ! `./res/cfn-lint/execute.sh`.

# Create/update CloudFormation template
cd ./res/initialize-serverless
serverless package --stage local
cd ../../
serverless package --stage local

# Execute CloudFormation lint using Python3
cfn-lint
