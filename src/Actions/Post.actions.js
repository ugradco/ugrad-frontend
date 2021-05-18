import * as PostConstants from "Constants/post.constants";

export const getFeedAPI = (postContent) => {
  const { page, params } = postContent;

  const requestPayload = {
    page,
    params,
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
