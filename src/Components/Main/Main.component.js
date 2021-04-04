import React from "react";
import style from "./Main.module.css";
import Sidebar from "../Cols/sidebar";
import MainCol from "../Cols/main";
import Extra from "../Cols/extra";

function Main({ children }) {
  return (
    <div className={style.main}>
      <Sidebar> sidebar </Sidebar>
      <MainCol>main</MainCol>
      <Extra>extra</Extra>
    </div>
  );
}

export default Main;
