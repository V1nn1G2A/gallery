import { GET_POSTS } from "../../../apollo/query/get_POSTS";
import { useQuery } from "@apollo/client";

function useBd() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return {loading: true}; ;
  if (error) return console.log(error);
  console.log(data.posts);
  return data.posts;
};

export default useBd;