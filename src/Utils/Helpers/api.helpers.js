import axios from "axios";
import { STATUS_TYPE } from "Constants/api.constants";
import { LOCAL_STORAGE } from "Constants/global.constants";
import { removeKeysFromLocalStorage } from "Utils/Helpers/storage.helpers";

export const apiGenerator = (type) => {
  const headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };

  const accessToken = localStorage.getItem(LOCAL_STORAGE.accessToken);

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers,
  };

  switch (type) {
    case "get":
      return (url, options = {}) =>
        axios.get(url, { ...defaultOptions, ...options }).then((response) => apiResponseHandler(response));
    case "post":
      return (url, data, options = {}) =>
        axios.post(url, data, { ...defaultOptions, ...options }).then((response) => apiResponseHandler(response));
    case "patch":
      return (url, data, options = {}) =>
        axios.patch(url, data, { ...defaultOptions, ...options }).then((response) => apiResponseHandler(response));
    case "put":
      return (url, data, options = {}) =>
        axios.put(url, data, { ...defaultOptions, ...options }).then((response) => apiResponseHandler(response));
    case "delete":
      return (url, options = {}) =>
        axios.delete(url, { ...defaultOptions, ...options }).then((response) => apiResponseHandler(response));
    default:
      return null;
  }
};

export function apiResponseHandler(response) {
  const responseType = getStatusCodeFamily(response.status);
  if (responseType === STATUS_TYPE.SUCCESS) {
    response.ok = true;
  } else if (responseType === STATUS_TYPE.CLIENT_ERROR && response.status === 401) {
    removeKeysFromLocalStorage();
    document.location.href = "/login";
  }

  return response;
}

export function getStatusCodeFamily(status) {
  return parseInt(String(status).charAt(0), 10);
}
