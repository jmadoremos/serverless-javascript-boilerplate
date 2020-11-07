#!/usr/bin/env pwsh

# Get the generated credentials
$SlsDeployUserAccessKeyId = $(aws cloudformation describe-stacks `
    --stack-name initialize-serverless-dev `
    --query "Stacks[0].Outputs[?OutputKey=='SlsDeployUserAccessKeyId'].OutputValue" `
    --output text)

$SlsDeployUserSecretAccessKey = $(aws cloudformation describe-stacks `
    --stack-name initialize-serverless-dev `
    --query "Stacks[0].Outputs[?OutputKey=='SlsDeployUserSecretAccessKey'].OutputValue" `
    --output text)

Write-Host "aws_access_key_id = $($SlsDeployUserAccessKeyId)"
Write-Host "aws_secret_access_key = $($SlsDeployUserSecretAccessKey)"
