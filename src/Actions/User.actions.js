import * as UserConstants from "Constants/user.constants";

export const getUserAPI = () => {
  const requestPayload = {};

  return {
    type: UserConstants.USER_API_PENDING,
    payload: { requestPayload },
  };
};

export const setIsUserPublic = (isPublic) => {
  return {
    type: UserConstants.USER_ANONYMITY_CHANGE,
    payload: { isPublic },
  };
};

export const setUserAPI = () => {};
