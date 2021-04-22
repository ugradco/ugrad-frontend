import * as UserConstants from "Constants/user.constants";
import { REQUEST_STATUS } from "../Constants/global.constants";

const initialState = {
  userCTX: {
    user: null,
    status: REQUEST_STATUS.NOT_DEFINED,
    error: false,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case UserConstants.USER_API_SUCCESS:
      return userAPISuccess(state, action);
    case UserConstants.USER_API_PENDING:
      return userAPIPending(state);
    case UserConstants.USER_API_FAILURE:
      return userAPIFailure(state);
    default:
      return state;
  }
}

function userAPISuccess(state, action) {
  return {
    ...state,
    userCTX: {
      user: action.payload,
      status: REQUEST_STATUS.SUCCESS,
      error: false,
    },
  };
}

function userAPIPending(state) {
  return {
    ...state,
    userCTX: {
      ...state.userCTX,
      status: REQUEST_STATUS.PENDING,
      error: false,
    },
  };
}

function userAPIFailure(state) {
  return {
    ...state,
    userCTX: {
      ...state.userCTX,
      status: REQUEST_STATUS.FAILURE,
      error: true,
    },
  };
}
