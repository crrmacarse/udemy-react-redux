import streams from "../apis/streams";
import history from "../history";
import { ACTIONTYPES } from "../constants";

const signIn = userId => {
  return {
    type: ACTIONTYPES.SIGN_IN,
    payload: userId
  };
};

const signOut = () => {
  return {
    type: ACTIONTYPES.SIGN_OUT
  };
};

const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: ACTIONTYPES.CREATE_STREAM, payload: response.data });
  history.push("/");
};

const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({ type: ACTIONTYPES.FETCH_STREAMS, payload: response.data });
};

const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: ACTIONTYPES.FETCH_STREAM, payload: response.data });
};

const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: ACTIONTYPES.EDIT_STREAM, payload: response.data });
  history.push("/");
};

const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: ACTIONTYPES.DELETE_STREAM });
};

export {
  signIn,
  signOut,
  createStream,
  fetchStreams,
  fetchStream,
  editStream,
  deleteStream
};
