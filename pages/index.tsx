import { getDataFromTree } from "@apollo/client/react/ssr";
import React from "react";
import App from "../components/App";
import PostList from "../components/PostList";
import withApollo from "../lib/withApollo";

const Index = () => {
  return (
    <App>
      <PostList />
    </App>
  );
};

// export default withApollo(Index);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
export default withApollo(Index, { getDataFromTree });
