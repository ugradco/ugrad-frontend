import * as UserConstants from "Constants/user.constants";

export const getUserAPI = () => {
  const requestPayload = {};

  return {
    type: UserConstants.USER_API_PENDING,
    payload: { requestPayload },
  };
};

export const updateUserAPI = ({ userId, name, shortBio }) => {
  return {
    type: UserConstants.UPDATE_USER_API_PENDING,
    payload: { userId, name, shortBio },
  };
};

export const setIsUserPublic = (isPublic) => {
  return {
    type: UserConstants.USER_ANONYMITY_CHANGE,
    payload: { isPublic },
  };
};

export const setUserAPI = () => {};
