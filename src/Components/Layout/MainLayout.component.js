import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import Extra from "../Cols/extra";
import MainCol from "../Cols/main";

function MainLayout({ user, children, onPrivacyChange }) {
  return (
    <div className={style.main}>
      <Sidebar user={user} onPrivacyChange={onPrivacyChange} />
      <MainCol style={style.mainBorders}>{children}</MainCol>
      <Extra />
    </div>
  );
}

export default MainLayout;
