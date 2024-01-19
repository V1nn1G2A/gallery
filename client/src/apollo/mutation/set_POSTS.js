import { gql } from "@apollo/client";

export const SET_POSTS = gql`
mutation CreatePosts($data: [PostCreateInput!]!) {
  createPosts(data: $data) {
    user_photo
    user_name
    userId
    urls
    likes
    id
    description
    alt_description
  }
}`;