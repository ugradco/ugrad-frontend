import { combineReducers } from "redux";

import login from "./login.reducer";
import account from "./account.reducer";
import post from "./post.reducer";

export default (history) =>
  combineReducers({
    login,
    account,
    post,
    history,
  });
