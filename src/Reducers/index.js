import { combineReducers } from "redux";

import login from "./login.reducer";
import account from "./account.reducer";
import post from "./post.reducer";
import user from "./user.reducer";
import tags from "./tags.reducer";

export default (history) =>
  combineReducers({
    login,
    account,
    post,
    user,
    tags,
    history,
  });
