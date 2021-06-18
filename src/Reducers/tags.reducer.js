import * as TagsConstants from "Constants/tags.constants";
import { REQUEST_STATUS } from "../Constants/global.constants";

const initialState = {
  tagsCTX: {
    user: null,
    status: REQUEST_STATUS.NOT_DEFINED,
    error: false,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case TagsConstants.TAGS_API_SUCCESS:
      return tagsAPISuccess(state, action);
    case TagsConstants.TAGS_API_PENDING:
      return tagsAPIPending(state);
    case TagsConstants.TAGS_API_FAILURE:
      return tagsAPIFailure(state);
    default:
      return state;
  }
}

function tagsAPISuccess(state, action) {
  return {
    ...state,
    tagsCTX: {
      tags: action.payload,
      status: REQUEST_STATUS.SUCCESS,
      error: false,
    },
  };
}

function tagsAPIPending(state) {
  return {
    ...state,
    tagsCTX: {
      ...state.tagsCTX,
      status: REQUEST_STATUS.PENDING,
      error: false,
    },
  };
}

function tagsAPIFailure(state) {
  return {
    ...state,
    tagsCTX: {
      ...state.tagsCTX,
      status: REQUEST_STATUS.FAILURE,
      error: true,
    },
  };
}
