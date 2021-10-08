import App from "../components/App";
import PostList, { ALL_POSTS_QUERY } from "../components/PostList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const SSRPage = () => (
  <App>
    <PostList />
  </App>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;
