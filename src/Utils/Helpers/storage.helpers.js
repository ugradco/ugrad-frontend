import { LOCAL_STORAGE } from "Constants/global.constants";

export const getItemFromLocalStorage = (itemName) => {
  try {
    const storedState = localStorage.getItem(itemName);

    if (storedState === null || storedState === undefined) {
      localStorage.removeItem(itemName);
      return undefined;
    }

    return JSON.parse(storedState);
  } catch (error) {
    return undefined;
  }
};

export const removeItemFromLocalStorage = (localStorageItem) => {
  localStorage.removeItem(localStorageItem);
};

export const saveItemToLocalStorage = (itemName, state) => {
  try {
    // Check if the state exists
    const storedState = JSON.parse(localStorage.getItem(itemName));
    const serializedState = JSON.stringify(storedState ? Object.assign(storedState, state) : state);
    localStorage.setItem(itemName, serializedState);
  } catch (error) {
    // Ignore write errors.
  }
};

export const setAccessTokenInLocalStorage = (accessToken) => {
  localStorage.setItem(LOCAL_STORAGE.accessToken, accessToken);
};

export const getAccessTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.accessToken);

  return accessToken || "";
};

export const removeAuthenticationKeysFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE.accessToken);
};

export const removeKeysFromLocalStorage = () => {
  removeAuthenticationKeysFromLocalStorage();
  sessionStorage.clear();
  // Remove data from local Storage
  Object.keys(LOCAL_STORAGE).forEach((localStorageItem) => {
    localStorage.removeItem(localStorageItem);
  });
};
