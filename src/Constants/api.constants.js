export const API_ENDPOINTS = {
  REGISTER: "/auth/register",
  VERIFY_REGISTER: "/users/registration/verify",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/revoke",
  ACCOUNT: "/users/me",
  ACCOUNT_PROFILE: "/users/me/profile",
};

export const STATUS_TYPE = {
  INFORMATION: 1,
  SUCCESS: 2,
  REDIRECT: 3,
  CLIENT_ERROR: 4,
  SERVER_ERROR: 5,
};
