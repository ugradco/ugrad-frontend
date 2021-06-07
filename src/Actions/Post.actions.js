import * as PostConstants from "Constants/post.constants";

export const getFeedAPI = (postContent) => {
  const { params, isLoadMore } = postContent;

  return {
    type: PostConstants.FEED_API_PENDING,
    payload: { params, isLoadMore },
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
