import jsonPlaceholder from "../api/jsonPlaceholder";

const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
};

export { fetchPosts };
