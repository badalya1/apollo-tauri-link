# apollo-tauri-link

This is a terminating link for [Apollo Client](https://github.com/apollographql/apollo-client) for [Tauri](https://tauri.studio/).
This package allows you to use Apollo Client in your Tauri application. This is a terminating link, which which replaces the usual `createHttpLink`. It is responsible for sending the request to the server and returning the response using tauris `invoke` function.

Take advantage of Apollo Client's caching, error handling, and more.

### ⚠ Warning

This package is in early development and is not yet ready for production use. Please use with caution.
There are no tests and it does not yet support subscriptions.

## Installation

```bash
npm install apollo-tauri-link
```

## Usage

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { invoke } from '@tauri-apps/api/tauri';
import { createTauriLink } from "apollo-tauri-link";

const client = new ApolloClient({
  link: createTauriLink({ invoke }),
  cache: new InMemoryCache(),
});
```

## License

[MIT](LICENSE)
