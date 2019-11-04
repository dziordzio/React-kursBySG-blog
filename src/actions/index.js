// Action creator
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get("/posts");
  // enf->
  // Return an action
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
