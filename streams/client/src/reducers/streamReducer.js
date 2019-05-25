import _ from "lodash";
import { ACTIONTYPES } from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONTYPES.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ACTIONTYPES.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case ACTIONTYPES.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case ACTIONTYPES.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case ACTIONTYPES.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
