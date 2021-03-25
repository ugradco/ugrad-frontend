export const API_ENDPOINTS = {
  REGISTER: "https://api.ugrad.co/auth/register",
  VERIFY_REGISTER: "/users/registration/verify",
  LOGIN: "https://api.ugrad.co/auth/register",
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
