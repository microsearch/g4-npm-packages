#!/bin/bash

npm ci

npx swagger-typescript-api -p $1 \
    --clean-output --output src --modular --axios --templates ./templates

npx ctix ./tsconfig.json
npx tsc
