#!/bin/bash

yarn build

# copy dist to mainnet S3
aws s3 cp ./build/ s3://uniswap-info/ --recursive --acl public-read

# invalidate mainnet cloudfront cache
aws cloudfront create-invalidation --distribution-id E1S8PH560N6N1F --paths "/*"
