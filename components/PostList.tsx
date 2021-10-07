import { gql, useQuery, NetworkStatus } from "@apollo/client";

export const ALL_POSTS_QUERY = gql`
  query allPosts {
    pages {
      nodes {
        id
        title
      }
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <div>{JSON.stringify(error)}</div>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  return (
    <section>
      <ul>
        {data.pages.nodes.map((post: any, index: number) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: "";
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  );
}
