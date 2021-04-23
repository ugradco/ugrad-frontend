import * as UserConstants from "Constants/user.constants";

export const getUserAPI = () => {
  const requestPayload = {};

  return {
    type: UserConstants.USER_API_PENDING,
    payload: { requestPayload },
  };
};

export const setUserAPI = () => {};
