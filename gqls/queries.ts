import { gql } from "@apollo/client";

export const CART_ITEMS_QUERY = gql`
  query allPosts {
    pages {
      nodes {
        id
        title
        
      }
    }
  }
`;
