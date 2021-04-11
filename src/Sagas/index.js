import { all, fork } from "redux-saga/effects";
import LoginSagas from "./login.saga";
import PostSagas from "./post.saga";

// RootSaga
export default function* root() {
  yield all([fork(LoginSagas), fork(PostSagas)]);
}
