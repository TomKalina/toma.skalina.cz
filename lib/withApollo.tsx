import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "https://skalina.cz/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
