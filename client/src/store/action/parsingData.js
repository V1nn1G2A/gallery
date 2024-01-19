export const parsingData = (data) => {
  const parsData = data.map((item, i) => ({
    id: i,
    urls: item.urls.regular,
    description: item.description == null ? "No description" : item.description,
    alt_description: item.alt_description,
    user_name: item.user.name,
    user_img: item.user.profile_image.small,
  }));
  return parsData;
};