import "tailwindcss/tailwind.css";

import App from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import withApollo from "next-with-apollo";
import React from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";

class MyApp extends App<any> {
  public render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: "https://skalina.cz/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
    }),
  { getDataFromTree }
)(MyApp);
