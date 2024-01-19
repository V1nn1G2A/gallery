import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Query {
    posts {
      user_photo
      user_name
      userId
      urls
      likes
      description
      id
      alt_description
    }
  }
`;
