import { all, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, STATUS_TYPE } from "Constants/api.constants";

import apiGenerator from "Utils/Helpers/api.helpers";

import * as AuthConstants from "Constants/auth.constants";

import { getStatusCodeFamily, apiErrorHandler } from "Utils/Helpers/saga.helpers";
import { removeKeysFromLocalStorage, setAccessTokenInLocalStorage } from "Utils/Helpers/storage.helpers";

function* loginAPISaga(action) {
  const { requestPayload } = action.payload;
  const api = apiGenerator("post")(API_ENDPOINTS.LOGIN, requestPayload);

  try {
    const response = yield api;

    if (getStatusCodeFamily(response.status) === STATUS_TYPE.SUCCESS) {
      const { access_token: accessToken } = response.data;

      setAccessTokenInLocalStorage(accessToken);

      yield put({
        type: AuthConstants.LOGIN_API_SUCCESS,
        payload: { accessToken },
      });
    } else {
      const error = apiErrorHandler({ response });

      yield put({
        type: AuthConstants.LOGIN_API_FAILURE,
        payload: error,
      });
    }
  } catch (err) {
    const error = apiErrorHandler(err);

    yield put({
      type: AuthConstants.LOGIN_API_FAILURE,
      payload: error,
    });
  }
}

function* logoutAPISaga(action) {
  const { requestPayload } = action.payload;
  const api = apiGenerator("post")(API_ENDPOINTS.LOGOUT, requestPayload);
  try {
    removeKeysFromLocalStorage();
    yield api;
  } catch (err) {
    // Logout error
  }
}

export default function* root() {
  yield all([
    takeLatest(AuthConstants.LOGIN_API_PENDING, loginAPISaga),
    takeLatest(AuthConstants.LOGOUT_API_PENDING, logoutAPISaga),
  ]);
}
