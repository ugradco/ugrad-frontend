import * as PostConstants from "Constants/post.constants";
import { REQUEST_STATUS } from "../Constants/global.constants";

const initialState = {
  feedCTX: {
    data: [],
    status: REQUEST_STATUS.NOT_DEFINED,
    error: false,
  },
};

export default function feed(state = initialState, action) {
  switch (action.type) {
    case PostConstants.FEED_API_SUCCESS:
      return feedAPISuccess(state, action);
    case PostConstants.FEED_API_PENDING:
      return feedAPIPending(state);
    case PostConstants.FEED_API_FAILURE:
      return feedAPIFailure(state);
    default:
      return state;
  }
}

function feedAPISuccess(state, action) {
  const { posts } = action.payload;
  return {
    ...state,
    feedCTX: {
      data: posts,
      status: REQUEST_STATUS.SUCCESS,
      error: false,
    },
  };
}

function feedAPIPending(state) {
  return {
    ...state,
    feedCTX: {
      ...state.feedCTX,
      status: REQUEST_STATUS.PENDING,
      error: false,
    },
  };
}

function feedAPIFailure(state) {
  return {
    ...state,
    feedCTX: {
      ...state.feedCTX,
      status: REQUEST_STATUS.FAILURE,
      error: true,
    },
  };
}
