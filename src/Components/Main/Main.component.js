import React from "react";
import cn from "classnames";
import style from "../Main/Main.module.css";

function Main({ children }) {
  return <div className={style.main}>{children}</div>;
}

export default Main;
