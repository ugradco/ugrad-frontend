import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import Extra from "../Cols/extra";
import MainCol from "../Cols/main";

function LoginLayout({ children }) {
  return <MainCol style={style.login}>{children}</MainCol>;
}

export default LoginLayout;
