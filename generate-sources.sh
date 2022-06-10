#!/usr/bin/env bash
rm -r ./gen
rm -r ./src/gen
npx @openapitools/openapi-generator-cli generate -i api.yaml -g javascript -o ./gen --additional-properties=usePromises=false
mkdir -p src/gen
cp -r ./gen/src/* ./src/gen
rm -r ./gen
