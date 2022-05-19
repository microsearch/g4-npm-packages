_list:
    @just --list

# rebuild all packages with updated dependencies
rebuild:
    #!/usr/bin/env bash
    set -euxo pipefail

    git clean -fxd
    cd {{ justfile_directory() }}/g4api
    rm -f package-lock.json
    npm install
    npm run gen-dev

    cd {{ justfile_directory() }}/g4api-support
    rm -f package-lock.json
    npm install
    npm run build

    cd {{ justfile_directory() }}/g4api-browser
    rm -f package-lock.json
    npm install
    npm run build

# list all packages in microsearch namespace
list:
    @aws codeartifact list-packages --domain microsearch \
        --repository microsearch --namespace microsearch --format npm
