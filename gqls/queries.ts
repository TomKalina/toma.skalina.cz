import { gql } from "@apollo/client";

export const PAGES_QUERY = gql`
  query allPosts {
    pages {
      nodes {
        id
        title
        uri
      }
    }
  }
`;

export const PAGE_DETAIL_QUERY = gql`
  query detailPage($id: ID!) {
    page(id: $id) {
      id
      content
    }
  }
`;
