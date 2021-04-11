import { all, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, STATUS_TYPE } from "Constants/api.constants";

import { apiGenerator } from "Utils/Helpers/api.helpers";

import * as PostConstants from "Constants/post.constants";

import { getStatusCodeFamily, apiErrorHandler } from "Utils/Helpers/saga.helpers";
import { removeKeysFromLocalStorage, setAccessTokenInLocalStorage } from "Utils/Helpers/storage.helpers";

function* feedAPISaga(action) {
  const { requestPayload } = action.payload;
  const api = apiGenerator("get")(API_ENDPOINTS.FEED, requestPayload);

  try {
    const response = yield api;

    if (getStatusCodeFamily(response.status) === STATUS_TYPE.SUCCESS) {
      const { posts } = response;

      yield put({
        type: PostConstants.FEED_API_SUCCESS,
        payload: { posts },
      });
    } else {
      const error = apiErrorHandler({ response });

      yield put({
        type: PostConstants.FEED_API_FAILURE,
        payload: error,
      });
    }
  } catch (err) {
    const error = apiErrorHandler(err);

    yield put({
      type: PostConstants.FEED_API_FAILURE,
      payload: error,
    });
  }
}

export default function* root() {
  yield all([takeLatest(PostConstants.FEED_API_PENDING, feedAPISaga)]);
}
