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

export const createPostAPI = (postContent) => {
  const { isPublic, text, tags } = postContent;

  const requestPayload = {
    isPublic,
    text,
    tags,
  };

  return {
    type: PostConstants.FEED_API_PENDING,
    payload: { requestPayload },
  };
};
