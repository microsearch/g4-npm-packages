# g4api

This is a thin wrapper around the G4 API for TypeScript and JavaScript. It's
automatically generated using `swagger-typescript-api`. This gives us some
advantages over manually writing interface code.

- We don't have to write interface code ourselves. It's a lot of tedious and
  error-prone work.
- The inputs and outputs of APIs are type-checked against the actual API.
- `swagger-typescript-api`-generated type annotations give us pretty good code
  completion in vscode.

The g4api version reflects the G4 Service version which it was built againt.
New versions of g4api won't always be released when the G4 Service version is
updated. If there's no version of g4api that matches the current version of
the G4 Service, it means that the most current version of g4api is still
compatible with the latest version of the G4 Service.

## importing g4api

Note: You will probably never need to import g4api directly since you should be
using g4api-support instead. It provides a higher level abstraction over the G4
API.

You can import g4api from our AWS CodeArtifact repository. To set up npm to
use our repository run the following command:

    aws codeartifact login --domain microsearch --repository microsearch --format npm

This will modify your `~/.npmrc` to use our repository instead of the public npm
repository. Our CodeArtifact npm respository is set up to use the public npm
repository as an upstream source, so you will still be able to import public npm
packages. Once you've logged into our CodeArtifact repository you can import g4api
with npm.

    npm import @microsearch/g4api --save
