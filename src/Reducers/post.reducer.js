import * as PostConstants from "Constants/post.constants";
import { unionBy } from "lodash";
import { REQUEST_STATUS } from "../Constants/global.constants";

const POSTS_PER_PAGE = 20;

const initialState = {
  feedCTX: {
    data: [],
    hasMore: false,
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
  const { posts, isLoadMore, hasMore } = action.payload;
  console.log("feedAPISuccess", posts, isLoadMore);
  return {
    ...state,
    feedCTX: {
      data: isLoadMore ? unionBy(state.feedCTX.data, posts, "_id") : posts,
      hasMore,
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
      hasMore: false,
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
      hasMore: false,
      status: REQUEST_STATUS.FAILURE,
      error: true,
    },
  };
}
