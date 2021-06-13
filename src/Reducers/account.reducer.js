import * as AuthConstants from "Constants/auth.constants";
import { getAccessTokenFromLocalStorage, removeItemFromLocalStorage } from "Utils/Helpers/storage.helpers";

const initialState = {
  accessToken: getAccessTokenFromLocalStorage(),
  account: null,
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case AuthConstants.LOGIN_API_SUCCESS:
      return loginAPISuccess(state, action);
    case AuthConstants.LOGOUT_API_PENDING:
      return logoutAPIPending();
    default:
      return state;
  }
}

function loginAPISuccess(state, action) {
  const { accessToken, user } = action.payload;
  return {
    ...state,
    accessToken,
    account: user,
  };
}

function logoutAPIPending() {
  removeItemFromLocalStorage("isPublic");
  return {
    ...initialState,
    accessToken: "",
  };
}
