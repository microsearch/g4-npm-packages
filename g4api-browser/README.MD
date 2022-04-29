# g4api-browser

Browser-only support tools for g4api.

## importing g4api-browser

You can import g4api-browser from our AWS CodeArtifact repository. To set up npm to
use our repository run the following command:

    aws codeartifact login --domain microsearch --repository microsearch --format npm

This will modify your `~/.npmrc` to use our repository instead of the public npm
repository. Our CodeArtifact npm respository is set up to use the public npm
repository as an upstream source, so you will still be able to import public npm
packages. Once you've logged into our CodeArtifact repository you can import g4api
with npm.

    npm import @microsearch/g4api-browser --save
