import React from "react";
import style from "./Main.module.css";
import Sidebar from "../Cols/sidebar";
import MainCol from "../Cols/main";
import Extra from "../Cols/extra";
import Post from "../Post";

function Main({ children }) {
  const user = { name: "Furkan", department: "EEE/CS" };
  return (
    <div className={style.main}>
      <Sidebar> sidebar </Sidebar>
      <MainCol>
        <Post favorite_count={120} text="Merhaba arkadaslar! Hava uzucu." user={user} />
      </MainCol>
      <Extra>extra</Extra>
    </div>
  );
}

export default Main;
