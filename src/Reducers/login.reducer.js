import { REQUEST_STATUS } from "Constants/global.constants";
import * as AuthConstants from "Constants/auth.constants";

const initialState = {
  loginCTX: {
    status: REQUEST_STATUS.NOT_DEFINED,
    error: false,
  },
};

export default function loginCTX(state = initialState, action) {
  switch (action.type) {
    case AuthConstants.LOGIN_CLEAR:
      return initialState;
    case AuthConstants.LOGIN_API_PENDING:
      return loginAPIPending(state);
    case AuthConstants.LOGIN_API_SUCCESS:
      return loginAPISuccess(state);
    case AuthConstants.LOGIN_API_FAILURE:
      return loginAPIFailure(state, action);
    case AuthConstants.LOGOUT_API_PENDING:
      return logout();
    default:
      return state;
  }
}

function loginAPIPending(state) {
  return {
    ...state,
    loginCTX: {
      status: REQUEST_STATUS.PENDING,
      error: false,
    },
  };
}

function loginAPISuccess(state) {
  return {
    ...state,
    loginCTX: {
      status: REQUEST_STATUS.SUCCESS,
      error: false,
    },
  };
}

function loginAPIFailure(state) {
  return {
    ...state,
    loginCTX: {
      status: REQUEST_STATUS.FAILURE,
      error: true,
    },
  };
}

function logout() {
  return initialState;
}
