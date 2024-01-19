const [setPosts, { data1, error }] = useMutation(SET_POSTS);

let postObj = {
  urls: data[0].urls.regular,
  likes: data[0].likes,
  description: data[0].description,
  alt_description: data[0].alt_description,
  user_photo: data[0].user.profile_image.small,
  user_name: data[0].user.username,
  userId: data[0].user.id,
};
const SetPosts = async (data) => {
  console.log(data);
  try {
    const data1 = await setPosts({
      variables: {
        data,
      },
    });

    console.log(data1.setPosts);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  SetPosts(postObj);
}, []);
