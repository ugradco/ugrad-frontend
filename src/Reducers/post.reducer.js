import * as PostConstants from "Constants/post.constants";
import { REQUEST_STATUS } from "../Constants/global.constants";

const initialState = {
  feedCTX: {
    data: null,
    status: REQUEST_STATUS.NOT_DEFINED,
    error: false,
  },
  // upvoteCTX: {

  // }
};

export default function feed(state = initialState, action) {
  switch (action.type) {
    case PostConstants.FEED_API_SUCCESS:
      return feedAPISuccess(state, action);
    case PostConstants.FEED_API_PENDING:
      return feedAPIPending();
    default:
      return state;
  }
}

function feedAPISuccess(state, action) {
  const { accessToken } = action.payload;
  return {
    ...state,
    accessToken,
  };
}

function feedAPIPending() {
  return {
    ...initialState,
    accessToken: "",
  };
}
