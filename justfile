_list:
    @just --list

# rebuild all packages
rebuild:
    #!/usr/bin/env bash
    set -euxo pipefail

    git clean -fxd
    cd {{ justfile_directory() }}/g4api
    npm ci
    npm run gen-dev

    cd {{ justfile_directory() }}/g4api-support
    npm ci
    npm run build

    cd {{ justfile_directory() }}/g4api-browser
    npm ci
    npm run build

# list all packages in microsearch namespace
list:
    @aws codeartifact list-packages --domain microsearch \
        --repository microsearch --namespace microsearch --format npm
