#!/bin/bash

npm ci

npx swagger-typescript-api -p $1 \
    --clean-output --output src --modular --axios --templates ./templates

pushd src
npx index-populator
popd

npx tsc
