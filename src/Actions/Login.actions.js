import * as AuthConstants from "Constants/auth.constants";

export const loginClear = () => ({
  type: AuthConstants.LOGIN_CLEAR,
});

export const loginAPI = (loginForm) => {
  const { email, token } = loginForm;

  const requestPayload = {
    email: email.toLowerCase(),
    token,
  };

  return {
    type: AuthConstants.LOGIN_API_PENDING,
    payload: { requestPayload },
  };
};

export const logoutAPI = () => {
  return {
    type: AuthConstants.LOGOUT_API_PENDING,
  };
};
