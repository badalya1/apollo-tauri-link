# apollo-tauri-link

This is a terminating link for [Apollo Client](https://github.com/apollographql/apollo-client) for [Tauri](https://tauri.studio/).
This package allows you to use Apollo Client in your Tauri application. This is a terminating link, which which replaces the usual `createHttpLink`. It is responsible for sending the request to the server and returning the response using tauris `invoke` function.

Take advantage of Apollo Client's caching, error handling, and more.

## Installation

```bash
npm install apollo-tauri-link
```

## Usage

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createTauriLink } from "apollo-tauri-link";

const client = new ApolloClient({
  link: createTauriLink(),
  cache: new InMemoryCache(),
});
```

## Example project with

## License

[MIT](LICENSE)
