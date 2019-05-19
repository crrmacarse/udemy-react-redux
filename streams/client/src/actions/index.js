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

export { signIn, signOut };
