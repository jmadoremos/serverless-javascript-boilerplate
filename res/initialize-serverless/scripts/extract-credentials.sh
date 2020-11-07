#!/bin/bash

# Get the generated credentials
function extractCredentials() {
    local SlsDeployUserAccessKeyId=$(aws cloudformation describe-stacks \
        --stack-name initialize-serverless-dev \
        --query "Stacks[0].Outputs[?OutputKey=='SlsDeployUserAccessKeyId'].OutputValue" \
        --output text)

    local SlsDeployUserSecretAccessKey=$(aws cloudformation describe-stacks \
        --stack-name initialize-serverless-dev \
        --query "Stacks[0].Outputs[?OutputKey=='SlsDeployUserSecretAccessKey'].OutputValue" \
        --output text)

    echo "aws_access_key_id = $SlsDeployUserAccessKeyId"
    echo "aws_secret_access_key = $SlsDeployUserSecretAccessKey"
}
extractCredentials
