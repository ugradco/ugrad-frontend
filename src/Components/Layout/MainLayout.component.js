import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import MainCol from "../Cols/main";

function MainLayout({ user, tags, children, isPublic, history }) {
  return (
    <div className={style.main}>
      <div className={style.sidebarContainer}>
        <Sidebar user={user} tags={tags} isPublic={isPublic} history={history} />
      </div>
      <MainCol style={style.mainBorders}>{children}</MainCol>
    </div>
  );
}

export default MainLayout;
