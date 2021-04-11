import * as PostConstants from "Constants/post.constants";

export const getFeedAPI = (postContent) => {
  const { page = 0 } = postContent;

  const requestPayload = {
    page,
  };

  return {
    type: PostConstants.FEED_API_PENDING,
    payload: { requestPayload },
  };
};

export const createPostAPI = () => {
  return {};
};
