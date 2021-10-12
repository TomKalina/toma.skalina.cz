import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
