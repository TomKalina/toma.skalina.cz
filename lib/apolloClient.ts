import { ApolloClient, InMemoryCache } from "@apollo/client";

export function getApolloClient({ initialState }: any) {
  return new ApolloClient({
    uri: "https://skalina.cz/graphql",
    cache: new InMemoryCache().restore(initialState || {}),
  });
}
