import { all, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, STATUS_TYPE } from "Constants/api.constants";

import { apiGenerator } from "Utils/Helpers/api.helpers";

import * as UserConstants from "Constants/user.constants";
import * as PostConstants from "Constants/post.constants";

import { getStatusCodeFamily, apiErrorHandler } from "Utils/Helpers/saga.helpers";

function* userAPISaga(action) {
  const { requestPayload } = action.payload;
  const api = apiGenerator("get")(API_ENDPOINTS.ACCOUNT, requestPayload);

  try {
    const response = yield api;

    if (getStatusCodeFamily(response.status) === STATUS_TYPE.SUCCESS) {
      // const { user } = response.data;
      yield put({
        type: UserConstants.USER_API_SUCCESS,
        payload: response.data,
      });
    } else {
      const error = apiErrorHandler({ response });

      yield put({
        type: UserConstants.USER_API_FAILURE,
        payload: error,
      });
    }
  } catch (err) {
    const error = apiErrorHandler(err);

    yield put({
      type: UserConstants.USER_API_FAILURE,
      payload: error,
    });
  }
}

function* updateUserAPISaga(action) {
  const { userId, name, shortBio } = action.payload;
  const api = apiGenerator("patch")(API_ENDPOINTS.UPDATE(userId), {
    name,
    shortBio,
  });

  try {
    const response = yield api;

    if (getStatusCodeFamily(response.status) === STATUS_TYPE.SUCCESS) {
      // const { user } = response.data;
      yield put({
        type: UserConstants.UPDATE_USER_API_SUCCESS,
        payload: response.data,
      });

      yield put({
        type: UserConstants.USER_API_PENDING,
        payload: response.data,
      });

      yield put({
        type: PostConstants.FEED_API_PENDING,
        payload: response.data,
      });
    } else {
      const error = apiErrorHandler({ response });

      yield put({
        type: UserConstants.UPDATE_USER_API_FAILURE,
        payload: error,
      });
    }
  } catch (err) {
    const error = apiErrorHandler(err);

    yield put({
      type: UserConstants.UPDATE_USER_API_FAILURE,
      payload: error,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(UserConstants.USER_API_PENDING, userAPISaga),
    takeLatest(UserConstants.UPDATE_USER_API_PENDING, updateUserAPISaga),
  ]);
}
