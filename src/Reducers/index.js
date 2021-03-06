import { combineReducers } from "redux";

import login from "./login.reducer";
import account from "./account.reducer";

export default (history) =>
  combineReducers({
    login,
    account,
    history,
  });
