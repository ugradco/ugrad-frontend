import * as TagsConstants from "Constants/tags.constants";

export const getTagsAPI = () => {
  const requestPayload = {};

  return {
    type: TagsConstants.TAGS_API_PENDING,
    payload: { requestPayload },
  };
};

export const setTagsAPI = () => {};
