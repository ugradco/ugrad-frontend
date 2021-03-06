import { removeKeysFromLocalStorage } from "Utils/Helpers/storage.helpers";

export function getStatusCodeFamily(status) {
  return parseInt(String(status).charAt(0), 10);
}

export function apiErrorHandler(err) {
  if (err.response && err.response.status === 401) {
    removeKeysFromLocalStorage();
    document.location.href = "/login";
  }

  return err.response ? err.response.data : { client_code: 700 };
}
