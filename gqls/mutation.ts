import { gql } from "@apollo/client";

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      clientMutationId
      comment {
        id
      }
    }
  }
`;
