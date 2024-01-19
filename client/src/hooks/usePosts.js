import { useQuery } from "@apollo/client"
import { GET_POSTS } from "../apollo/query/get_POSTS"

export const usePosts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return {loading : true};
  if (error) return {error};
  
  return {posts : data.posts};
}