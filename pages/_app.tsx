import "tailwindcss/tailwind.css";

import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import withApollo from "next-with-apollo";
import React from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { getApolloClient } from "../lib/apolloClient";

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

export default withApollo(getApolloClient, { getDataFromTree })(MyApp);
