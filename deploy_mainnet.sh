#!/bin/bash

# build
NODE_ENV=production yarn build

# copy dist to mainnet S3
aws s3 sync ./build/ s3://info.voltswap.finance/ --delete

# invalidate mainnet cloudfront cache
aws cloudfront create-invalidation --distribution-id E27CLAVHYJ840L --paths "/*"