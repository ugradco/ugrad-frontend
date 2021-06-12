import * as UserConstants from "Constants/user.constants";
import { getItemFromLocalStorage } from "Utils";
import { removeItemFromLocalStorage, saveItemToLocalStorage } from "Utils/Helpers/storage.helpers";
import { REQUEST_STATUS } from "../Constants/global.constants";

const initialState = {
  isPublic: getItemFromLocalStorage("isPublic", false),
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
    case UserConstants.USER_ANONYMITY_CHANGE:
      return userAnonymityChange(state, action);
    default:
      return state;
  }
}

function userAnonymityChange(state, action) {
  const { isPublic } = action.payload;
  if (isPublic) {
    saveItemToLocalStorage("isPublic", isPublic);
  } else {
    removeItemFromLocalStorage("isPublic");
  }

  return {
    ...state,
    ...state.user,
    isPublic,
  };
}

function userAPISuccess(state, action) {
  return {
    ...state,
    ...action.payload,
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
