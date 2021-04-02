import * as PostConstants from "Constants/post.constants";

const initialState = {
  post: {
    data: null,
    error: false,
  },
  // upvoteCTX: {

  // }
};

export default function post(state = initialState, action) {
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
