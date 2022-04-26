# g4api-ts

This is a thin wrapper around the G4 API for TypeScript and JavaScript. It's
automatically generated using `swagger-typescript-api`. This gives us some
advantages over manually writing interface code.

- We don't have to write interface code ourselves. It's a lot of tedious and
  error-prone work.
- The inputs and outputs of APIs are type-checked against the actual API.
- `swagger-typescript-api`-generated type annotations give us pretty good code
  completion in vscode.

The g4api-ts version reflects the G4 Service version which it was built againt.
New versions of g4api-ts won't always be released when the G4 Service version is
updated. If there's no version of g4api-ts that matches the current version of
the G4 Service, it means that the most current version of g4api-ts is still
compatible with the latest version of the G4 Service.

## importing g4api-ts

You can import g4api-ts from our AWS CodeArtifact repository. To set up npm to
use our repository run the following command:

    aws codeartifact login --domain microsearch --repository microsearch --format npm

This will modify your `~/.npmrc` to use our repository instead of the public npm repository. Our CodeArtifact npm respository is set up to use the public npm repository as an upstream source, so you will still be able to import public npm packages.

## sample code

```typescript
import * as g4 from "g4api";

const baseURL = "https://g4-dev.v1.mrcapi.net";

async function authenticate(): Promise<g4.UserAuthenticationResponse> {
  const g4auth = new g4.Auth({ baseURL });
  // generated methods are async
  const response = await g4auth.post({
    username: "bender",
    password: "meatbag",
  });
  return response.data;
}

// wrap calls in async lambda expression since await is not allowed at top level
(async () => {
  const auth = await authenticate();
  console.log(auth.fullname);
  console.log(auth.bearer);

  const g4tenants = new g4.Tenants({ baseURL });
  const tenants = await g4tenants.get({
    headers: { authorization: `bearer ${auth.bearer}` },
  });
  console.log(tenants.data.tenants);
})();
```
