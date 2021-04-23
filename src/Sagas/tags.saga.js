import { all, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, STATUS_TYPE } from "Constants/api.constants";

import { apiGenerator } from "Utils/Helpers/api.helpers";

import * as TagsConstants from "Constants/tags.constants";

import { getStatusCodeFamily, apiErrorHandler } from "Utils/Helpers/saga.helpers";

function* tagsAPISaga(action) {
  const { requestPayload } = action.payload;
  const api = apiGenerator("get")(API_ENDPOINTS.TAGS, requestPayload);

  try {
    const response = yield api;

    if (getStatusCodeFamily(response.status) === STATUS_TYPE.SUCCESS) {
      yield put({
        type: TagsConstants.TAGS_API_SUCCESS,
        payload: response.data,
      });
    } else {
      const error = apiErrorHandler({ response });

      yield put({
        type: TagsConstants.TAGS_API_FAILURE,
        payload: error,
      });
    }
  } catch (err) {
    const error = apiErrorHandler(err);

    yield put({
      type: TagsConstants.TAGS_API_FAILURE,
      payload: error,
    });
  }
}

export default function* root() {
  yield all([takeLatest(TagsConstants.TAGS_API_PENDING, tagsAPISaga)]);
}
