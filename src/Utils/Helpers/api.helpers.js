import axios from "axios";
import { STATUS_TYPE } from "Constants/api.constants";
import { LOCAL_STORAGE } from "Constants/global.constants";

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
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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
  // TODO: 401 gelirse login'e yonlendir - environment'a eklenecek
  if (getStatusCodeFamily(response.status) === STATUS_TYPE.SUCCESS) {
    response.ok = true;
  }
  return response;
}

export function getStatusCodeFamily(status) {
  return parseInt(String(status).charAt(0), 10);
}
