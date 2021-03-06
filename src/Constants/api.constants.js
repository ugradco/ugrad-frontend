export const API_ENDPOINTS = {
  REGISTER: "/users/",
  VERIFY_REGISTER: "/users/registration/verify",
  LOGIN: "/auth/token",
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
